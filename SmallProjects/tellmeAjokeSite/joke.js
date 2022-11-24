
    let jokes = [ `I went to buy some camo pants but couldn’t find any
    `,

    `I failed math so many times at school, I can’t even count

    `,

    ` I used to have a handle on life, but then it broke

    `,

    ` I was wondering why the frisbee kept getting bigger and bigger, but then it hit me

    `,

    ` I heard there were a bunch of break-ins over at the car park. That is wrong on so many levels

    `,

    ` I want to die peacefully in my sleep, like my grandfather… Not screaming and yelling like the passengers in his car

    `,

    ` When life gives you melons, you might be dyslexic

    `,

    ` Don’t you hate it when someone answers their own questions? I do

    `,

    `  It takes a lot of balls to golf the way I do

    `,

    `  I told him to be himself; that was pretty mean, I guess
    `,

    ` I know they say that money talks, but all mine says is ‘Goodbye.
    `,

    `My father has schizophrenia, but he’s good people
    `,

    ` The problem with kleptomaniacs is that they always take things literally
    `,

    ` I can’t believe I got fired from the calendar factory. All I did was take a day off
    `,

    ` Most people are shocked when they find out how bad I am as an electrician
    `,

    ` Never trust atoms; they make up everything
    `,

    ` My wife just found out I replaced our bed with a trampoline. She hit the ceiling
    `,

    ` I was addicted to the hokey pokey, but then I turned myself around
    `,

    ` I used to think I was indecisive. But now I’m not so sure
    `,

    `Russian dolls are so full of themselves
    `,

    `. The easiest time to add insult to injury is when you’re signing someone’s cast
    `,

    ` Light travels faster than sound, which is the reason that some people appear bright before you hear them speak
    `,

    `. My therapist says I have a preoccupation for revenge. We’ll see about that
    `,

    `A termite walks into the bar and asks, ‘Is the bar tender here?
    `,

    ` A told my girlfriend she drew her eyebrows too high. She seemed surprised
    `,

    `. People who use selfie sticks really need to have a good, long look at themselves
    `,

    `Two fish are in a tank. One says, ‘How do you drive this thing?
    `,

    `. I always take life with a grain of salt. And a slice of lemon. And a shot of tequila
    `,

    `. Just burned 2,000 calories. That’s the last time I leave brownies in the oven while I nap
    `,

    ` Always borrow money from a pessimist. They’ll never expect it back
    `,

    ` Build a man a fire and he’ll be warm for a day. Set a man on fire and he’ll be warm for the rest of his life
    `,

    ` I don’t suffer from insanity—I enjoy every minute of it
    `,

    ` The last thing I want to do is hurt you; but it’s still on the list
    `,

    `. The problem isn’t that obesity runs in your family. It’s that no one runs in your family
    `,

    ` Today a man knocked on my door and asked for a small donation toward the local swimming pool. I gave him a glass of water
    `,

    ` I’m reading a book about anti-gravity. It’s impossible to put down
    `,

    ` ‘Doctor, there’s a patient on line one that says he’s invisible.’

    `,

    `. Blunt pencils are really pointless
    `,

    ` 6:30 is the best time on a clock, hands down
    `,

    ` Two wifi engineers got married. The reception was fantastic
    `,

    `. Just got fired from my job as a set designer. I left without making a scene
    `,

    ` What’s the difference between ignorance and apathy? I don’t know and I don’t care
    `,

    ` One of the cows didn’t produce milk today. It was an udder failure
    `,

    ` Adam & Eve were the first ones to ignore the Apple terms and conditions
    `,

    `. Refusing to go to the gym is a form of resistance training
    `,

    ` If attacked by a mob of clowns, go for the juggler
    `,

    `The man who invented Velcro has died. RIP
    `,

    `. Despite the high cost of living, it remains popular
    `,

    `A dung beetle walks into a bar and asks, ‘Is this stool taken?
    `,

    ` I can tell when people are being judgmental just by looking at them
    `,

    ` The rotation of Earth really makes my day
    `,

    ` Well, to be Frank with you, I’d have to change my name
    `,

    `. My friend was explaining electricity to me, but I was like, ‘Watt?
    `,

    ` What if there were no hypothetical questions
    `,

    `Are people born with photographic memories, or does it take time to develop
    `,

    `. The world champion tongue twister got arrested. I hear they’re going to give him a tough sentence
    `,

    ` Pollen is what happens when flowers can’t keep it in their plants
    `,

    `. A book fell on my head the other day. I only have my shelf to blame though
    `,

    ` Communist jokes aren’t funny unless everyone gets them
    `,

    ` Geology rocks, but geography’s where it’s at
    `,

    ` I buy all my guns from a guy called T-Rex. He’s a small arms dealer
    `,

    ` My friend’s bakery burned down last night. Now his business is toast
    `,

    ` Four fonts walk into a bar. The bartender says, ‘Hey! We don’t want your type in here!
    `,

    ` If you don’t pay your exorcist, do you get repossessed
    `,

    ` When the cannibal showed up late to the buffet, they gave him the cold shoulder
    `,

    `Best Voting Quotes for Election Day 2022, and other top stories from November 08, 2022.`
];

let put = document.getElementById("joke");
put.innerHTML = "Hey over here :)";
let change = document.getElementsByTagName("button")[0];
console.log(change);

put.addEventListener("mouseover", function(){
    put.innerHTML = "Hello :\)";
    setTimeout(() => {
        put.innerHTML ="Click On the Button For the Joke"
        
    },1000);
})

change.addEventListener("mouseover",function(){
    change.style.backgroundColor = "yellow";
})

change.addEventListener("click",function(){
    let ji = Math.floor(Math.random()*jokes.length);
    put.innerHTML = jokes[ji];
})