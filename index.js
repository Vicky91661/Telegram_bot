const { Telegraf } = require('telegraf');
const bot = new Telegraf('5881612615:AAEBughNo0mC2XAIdD_meGSURbg5gnbBP_o');

const linearSearch = 
`function search(arr,x)
{
    int n=arr.length();
    for(int i=0;i<n;i++)
    {
        if(arr[i]===x)
        {
            return i;
        }
    }
    return undefine;
};
`;
bot.start((ctx) => ctx.reply('welcome to vicky\'s bot'));
bot.command('linearsearch', (ctx) => ctx.reply(linearSearch));
bot.on('sticker',(ctx)=>ctx.reply('love you'));

bot.on('text',(ctx)=>{
    if(ctx.update.message.text=='I love you')
    {
        ctx.reply('love you too bro');
    }
    else{
        ctx.reply('I don\'t understand humans' );
    }
});


bot.launch();