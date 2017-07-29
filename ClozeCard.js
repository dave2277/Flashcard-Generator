//This constructor is for creating new flashcards

var ClozeCard = function(full, cloze, partial) {
    this.full = full;
    this.cloze = cloze;
    this.partial = partial;
};

//Export module code
module.exports = ClozeCard;