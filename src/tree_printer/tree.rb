class Tree

  def initialize file_name
    content = File.read file_name
    @lines = content.split("\n")
  end

  def print_tree
    current = {first: tree_size ** 2, step: 0}
    @lines.each do |line|
      print " " * current[:first]
      line.split(" ").each do |leaf_v|
        print leaf_v
        print " " * current[:step]
      end
      current = get_pos(current)
      puts
    end
  end

  def get_pos(parent)
    {first: (parent[:first].to_f / 2).round(), step: parent[:first] - 2}
  end

  def tree_size
    return @lines.length if @lines.length.odd?
    @lines.length + 1
  end

end


Tree.new('tree.ini').print_tree