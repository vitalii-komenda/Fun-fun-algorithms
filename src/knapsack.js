// const items=[{v: 5, w: 10}, {v: 1, w: 1}, {v: 3, w: 4}]

const knp = (items, selected, maxWeight, val)=>{
    if (maxWeight === 0) return [val, selected];
    if (maxWeight < 0) return [0, selected];
    if (!items.length) return [val, selected];

    let last = items[items.length-1];
    let including = knp(
      items.slice(0, -1),
      selected.concat(last),
      maxWeight - last.w,
      val+last.v
    );
    let notIncluding = knp(items.slice(0, -1), selected, maxWeight, val);
    
    return including[0] > notIncluding[0] ? including : notIncluding;
}

// knp(items, [], 5, 0)
