const Moment = require('moment')
const Discord = require('discord.js')
let prefix = '.'
module.exports = client => {
  
  const aktiviteListesi = [
    `Asreus victorious!`,
    '#EvdeKalAsterius'
  ]

  client.user.setStatus('idle')
  
  setInterval(() => {
    const Aktivite = Math.floor(Math.random() * (aktiviteListesi.length - 1))
    client.user.setActivity(aktiviteListesi[Aktivite])
  }, 7000)
}