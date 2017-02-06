const Node = function (node) {
  this.node = node;
  this.evalute = function() {
    return this.node.evalute();
  }
};

const AddNode = function (left, right) {
  this.left = left;
  this.right = right;
  this.evalute = function () {
    return this.left.evalute() + this.right.evalute();
  };
};

const MultiplyNode = function (left, right) {
  this.left = left;
  this.right = right;
  this.evalute = function () {
    return this.left.evalute() * this.right.evalute();
  };
}


const ValueNode = function (value) {
  this.value = value;
  this.evalute = function () {
    return this.value;
  }
};

const calculator = new Node(
  new AddNode(
    new MultiplyNode(
      new ValueNode(5),
      new ValueNode(5)
    ),
    new ValueNode(5)
  )
);

calculator.evalute();
