var messages = [];
let id = 0;

module.exports = {

    create: (req,res) => {
        const {text, time} = req.body;
        messages.push({id, text, time});
        id++;
        res.status(200).send (messages);
    },

    read: (req,res) => {
        res.status(200).send(messages);
    },

    update: (req,res) => {
        const needId = req.params.id;
        const {text} = req.body;
        const index = messages.findIndex(message => message.id == needId);
        let message = messages[index];

        messages[index] = {
            id: message.id,
            text: text || message.text,
            time: message.time
        }

        res.status(200).send(messages);
    },

    delete: (req, res) => {
        const id = req.params.id;
        const index = messages.findIndex(message => {
            messages.id === id;
        })

        messages.splice(index, 1);
        res.status(200).send(messages);
    }
    
}