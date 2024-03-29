const labelsDiv = document.querySelector('.labels')
const emojis = {
    '🎂': 0,
    '🍦': 0,
    '🐸': 0,
    '🍪': 0,
    '🐈': 0,
    '🥑': 0,
    '🌸': 0,
}

const emojiButtons = Object.keys(emojis).map(emoji => {
    const button = document.createElement('button')
    button.innerText = emoji
    button.id = emoji

    button.addEventListener('click', () => {
        const currentCount = emojis[emoji] 
        emojis[emoji] = currentCount + 1
        const oldEmojiDiv = document.querySelector('div.emoji')
        if (oldEmojiDiv) {
            oldEmojiDiv.innerText = emoji
        } else {
            const emojiDiv = document.createElement('div')
            emojiDiv.innerText = emoji
            emojiDiv.classList.add('emoji')
            document.body.append(emojiDiv)
        }

        renderEmojiLabels()
    })

    return button
})

const renderEmojiLabels = () => {
    while(labelsDiv.firstChild) {
        labelsDiv.removeChild(labelsDiv.lastChild)
    }
    const emojiLabels = Object.keys(emojis).map(emoji => {
        const label = document.createElement('p')
        label.innerText = `${emoji}: ${emojis[emoji]}`
        
        return label
    })
    
    labelsDiv.append(...emojiLabels)
}

renderEmojiLabels()
document.body.append(...emojiButtons)