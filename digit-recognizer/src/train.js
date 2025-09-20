const tf = require('@tensorflow/tfjs-node');
const model = require('./model/build-model');

async function run() {
    model.summary()

    // Load and preprocess data
    const csvDataset = tf.data.csv(
        'file://./data/mnist/train.csv', {
            hasHeader: true, 
            columnConfigs: {
                label: {
                    isLabel: true
                }
            }
        }
    );

    // For debugging, take a look at the first element of the dataset.
    //csvDataset.take(1).forEachAsync((d) => {
    //    console.log(d)
    //})

    const flattenedDataset = csvDataset.map(({
        xs,
        ys
    }) => {
        return {
            xs: tf.tensor(Object.values(xs), [28, 28, 1]),
            ys: tf.oneHot((Object.values(ys)[0]), 10)
        };
    }).shuffle(1000).batch(64);
    await model.fitDataset((flattenedDataset), {
        epochs: 30,
        callbacks: tf.node.tensorBoard('./logdir', {
            updateFreq: 'batch'
        })
    });

    model.save('file://./models/mnist')
}
run();