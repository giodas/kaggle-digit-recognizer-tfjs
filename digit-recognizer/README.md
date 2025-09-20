# My TensorFlow.js Application

This project is a simple TensorFlow.js application that demonstrates how to load data, build a model, and train it using JavaScript.

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd kaggle-digit-recognizer-tfjs/digit-recognizer
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

## Usage

### Download data

Prerequisite: install [kaggle cli](https://www.kaggle.com/docs/api)

```bash
cd data && mkdir mnist && cd mnist && kaggle competitions download -c digit-recognizer && unzip digit-recognizer.zip && rm digit-recognizer.zip
```

### Run application

- The application will load the dataset, build the model, and start the training process.
- You can modify the model architecture in `src/model/build-model.js` and adjust training parameters in `src/train.js`.

## License

This project is licensed under the MIT License.