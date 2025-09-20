# My TensorFlow.js Application

This project is a simple TensorFlow.js application that demonstrates how to load data, build a model, and train it using JavaScript.

## Project Structure

```
my-tfjs-app
├── src
│   ├── index.js          # Entry point of the application
│   ├── data
│   │   └── load-data.js  # Data loading and preprocessing
│   ├── model
│   │   ├── build-model.js # Model architecture definition
│   │   └── train.js       # Model training logic
│   └── utils
│       └── metrics.js     # Utility functions for evaluation
├── package.json           # npm configuration file
├── .gitignore             # Files and directories to ignore by Git
└── README.md              # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd my-tfjs-app
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
- You can modify the model architecture in `src/model/build-model.js` and adjust training parameters in `src/model/train.js`.

## License

This project is licensed under the MIT License.