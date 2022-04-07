let stories = [
    {
        "inputs": 8,
        "title": "Let's Go to the Zoo",
        "story": `Today we went to the zoo! The first thing we saw was a <span class="rep_input">_____</span> <span class="rep_input">_____</span> <span class="rep_input">_____</span>. The zookeeper told us that was normal, except in <span class="rep_input">_____</span>. I had a <span class="rep_input">_____</span> time! Next time, I will remember that if I ever see <span class="rep_input">_____</span> <span class="rep_input">_____</span>, I should <span class="rep_input">_____</span> the other way.`,
        "words": ["Black", "Gorilla", "Dancing", "Madagascar", "Nice", "White", "Tigers", "Move"]
    },
    {
        "inputs": 7,
        "title": "Picnic Time",
        "story": `On <span class="rep_input">_____</span> we are going on a picnic! I'm going with my <span class="rep_input">_____</span> and my favourite pet <span class="rep_input">_____</span>. For lunch, we will eat <span class="rep_input">_____</span> and drink <span class="rep_input">_____</span>. We will end the day with a <span class="rep_input">_____</span> game of <span class="rep_input">_____</span>.`,
        "words": ["Sunday", "Aunt", "Dog", "Burgers", "Soft Drinks", "Nice", "Cards"]
    },
    {
        "inputs": 12,
        "title": "Silly Animal Tale",
        "story": `There once was a struggling <span class="rep_input">_____</span> from <span class="rep_input">_____</span>. Nobody knew he was a <span class="rep_input">_____</span> because he had <span class="rep_input">_____</span> fur and ate <span class="rep_input">_____</span> <span class="rep_input">_____</span> each day. He liked to <span class="rep_input">_____</span> and sing <span class="rep_input">_____</span>. Whenever he was <span class="rep_input">_____</span>, he would start speaking <span class="rep_input">_____</span>. Then he would feel <span class="rep_input">_____</span>.`,
        "words": ["Smelly", "Cat", "California", "Cat", "Blue", "3", "Fishes", "Dance", "Songs", "Sad", "Childishly", "Happy"]
    },
    {
        "inputs":14,
        "title":"the lion and the mouse",
        "story":`A lion was once  <span class="rep_input">_____</span> in the jungle when a mouse started  <span class="rep_input">_____</span> up and down his body just for fun.This <span class="rep_input">_____</span> the lion’s sleep, and he woke up quite <span class="rep_input">_____</span>.He was about to eat the <span class="rep_input">_____</span> when the mouse desperately <span class="rep_input">_____</span> the lion to set him free.“I promise you, I will be of <span class="rep_input">_____</span> <span class="rep_input">_____</span> to you someday if you save me.”The lion laughed at the mouse’s confidence and let him go.One day, a few <span class="rep_input">_____</span>  came into the forest and took the lion with them.They tied him up against a tree.The lion was <span class="rep_input">_____</span> to get out and started to <span class="rep_input">_____</span>. Soon, the mouse walked past and <span class="rep_input">_____</span> the lion in trouble. Quickly, he ran and gnawed on the <span class="rep_input">_____</span> to set the lion free. Both of them sped off into the <span class="rep_input">_____</span>.`,
        "words":["sleeping","running","disturbed","angry","mouse","requested","great","help","hunters","struggling","whimper","noticed","rope","jungle"]
    }
]
$(document).ready(function () {
    displayStory();
})
$(function(){
    $(".input_field").keyup(function(){
        let id=$(this).attr("id");
        let input_number=id.split("_")[1]
        $(".rep_input").eq(input_number).html($(this).val());

    })
    $("#next_story").click(function(){
        displayStory();
    })
})

function displayStory() {
    const story = stories[Math.floor(Math.random() * stories.length)];
    $("#story_title").html(story.title)

    $("#bank_words").empty();
    for (let i = 0; i < story.words.length; i++) {
        let html = `<button class="word_bank_button">${story.words[i]}</button>`
        $("#bank_words").append(html)
    }

    $("#input_fields").empty();
    for (let i = 0; i < story.inputs; i++) {
        let input_html = `<input type="text" class="input_field" id="input_${i}" placeholder="Input ${i + 1}"/>`
        $("#input_fields").append(input_html)
    }

    $("#story_text").html(story.story)
}
