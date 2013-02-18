

map_closest = function () {
    var pitt = [-80.064879, 40.612044];
    var phil = [-74.978052, 40.089738];

    function distance(a, b) {
        var dx = a[0] - b[0];
        var dy = a[1] - b[1];
        return Math.sqrt(dx * dx + dy * dy);
    }

    if (distance(this.loc, pitt) < distance(this.loc, phil)) {
        emit("pitt", 1);
    } else {
        emit("phil", 1);
    }
}

r = function( key , values ){
    var total = 0;
    for ( var i=0; i<values.length; i++ )
        total += values[i];
    return { count : total };
};



/* db.zips.mapReduce(map_closest, r, {out :{inline:1}, query : {state : /^PA$/i}}); */
