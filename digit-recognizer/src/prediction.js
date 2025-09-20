import { loadLayersModel, data, tensor, topk } from '@tensorflow/tfjs-node';
import writePredictions from './utils.js';

async function run() {
    const model = await loadLayersModel(`file://./models/mnist/model.json`);
    const results = [];
    const header = [
        {id: 'id', title: 'ImageId'},
        {id: 'label', title: 'Label'}
    ];
    const testData = data.csv(
        'file://./data/mnist/test.csv', {
            hasHeader: true
        });
    const processedTest = testData.map((x) => tensor(Object.values(x), [28, 28, 1]));
    let index = 1;
    await processedTest.forEachAsync((d) => {
        const res = model.predict(d.reshape([1, 28, 28, 1]));
        const {indices} = topk(res);
        results.push({id: index, label: indices.dataSync()[0]});
        index += 1;
    });

    writePredictions('./results/mnist.csv', header, results)
    
}

run()