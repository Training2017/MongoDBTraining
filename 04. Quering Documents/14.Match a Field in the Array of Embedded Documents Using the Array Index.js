db.users.find( { 'points.0.points': { $lte: 55 } } )