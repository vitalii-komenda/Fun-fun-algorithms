var node = function (node) {
  this.node = node;
  this.evalute = function() {
    return this.node.evalute();
  }
};

var addNode = function (left, right) {
  this.left = left;
  this.right = right;
  this.evalute = function () {
    return this.left.evalute() + this.right.evalute();
  };
};

var multiplyNode = function (left, right) {
  this.left = left;
  this.right = right;
  this.evalute = function () {
    return this.left.evalute() * this.right.evalute();
  };
}


var valueNode = function (value) {
  this.value = value;
  this.evalute = function () {
    return this.value;
  }
};

r = new node(
  new addNode(
    new multiplyNode(
      new valueNode(5),
      new valueNode(5)
    ),
    new valueNode(5)
  )
);

r.evalute();