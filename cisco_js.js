let vessel = [
    {
        LATITUDE: 40.07288, 
        LONGITUDE: 154.48535, 
        COURSE: 285.6, 
        SPEED: 14.0, 
        IMO: 9175717,
        NAME: "MARENO",
    }
]
 
for( let key in vessel) { 
    console.log(`${key} -> ${vessel[key]}`); 
}