class Tree

  def initialize file_name
    content = File.read file_name
    @lines = content.split("\n")
  end

  def print_tree
     parent = {first: ((tree_size - 1) ** 2).to_f, step: 0 }
     @lines.each do |line|
       center_to = parent
       #p center_to
       print " " * center_to[:first]
       line.split(" ").each do |leaf_v|
         print leaf_v
         print " " * center_to[:step]
       end
       center_to = get_pos(parent)
       parent = center_to
       puts
     end
  end

  def get_pos(parent)
    {first: (parent[:first].to_f / 2).round(), step: parent[:first] - 2 }
  end

  def tree_size
    return @lines.length + 1 if @lines.length.odd?
    @lines.length
  end

end


Tree.new('tree.ini').print_tree