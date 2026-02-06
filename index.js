function camelize(str){
    removed_ = str.split("-");
    capitalized_ = removed_.map((word, index) => {
        if (index == 0) {
            return word;
        } else {
            return word[0].toUpperCase() + word.slice(1);
        }
    });
    joined_ = capitalized_.join("");
    alert (joined_);
}

camelize("-webkit-transition");