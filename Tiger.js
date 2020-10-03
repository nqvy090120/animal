function Tiger(name)
{
    this.name = name;
    this.stomach = [];
}
Tiger.prototype.eat = function(dog)
{
    this.stomach.push(dog);
    dog.dead = true;
}
module.exports = Tiger;