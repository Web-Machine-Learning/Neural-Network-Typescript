const inputs = [
        { name: '#1 sajfhdsjkfhsdjhk jsdfhjksdhfksdj sdjfhsdjkfhsdjk', value: 1 },
        { name: '#5', value: 5 },
    ],
    inputValues = [],
    outputs = [
        { name: 'action #1 asjfdsjkgh sdjgkydg jghdfkjghfd fdhgjdfkhgkdfjk', operation: function() {} },
    ]

for (const input of inputs) {

    inputValues.push(input.value)
}

window.addEventListener('load', startNetworks)

function startNetworks() {

    const network = new NeuralNetwork()
    network.construct(inputs.length, outputs.length)
    network.createVisuals(inputs, outputs)

    console.log(network)
}

setInterval(runNetworks, 1000)

function runNetworks() {

    for (const networkID in networkManager.networks) {

        const network = networkManager.networks[networkID]

        network.learn()

        network.forwardPropagate(inputValues)
    }
}