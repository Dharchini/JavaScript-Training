

//JAVASCRIPT ASSIGNMENT 1

// decrease the rainfall by 10% to account for runoff

reservoir_volume = 4.445e8;
rainfall = 5e6;
rainfall= rainfall - (rainfall/10);
console.log("After decreasing 10% of rainfall as runoff :",rainfall);

// add the rainfall to the reservoir_volume

reservoir_volume = reservoir_volume + rainfall;
console.log("\nUpdated reservoir volume : ",reservoir_volume);

// increase reservoir_volume by 5% to account for stormwater that flows into the reservoir in the days following the storm

reservoir_volume = reservoir_volume + (reservoir_volume*0.5);
console.log("Increasing reservoir volume by 5% : ",reservoir_volume);

// decrease reservoir_volume by 5% to account for evaporation

reservoir_volume = reservoir_volume - (reservoir_volume*0.5);
console.log("Decreasing reservoir volume by 5% : ",reservoir_volume);

// subtract 2.5e5 cubic meters from reservoir_volume to account for water that's piped to arid regions

reservoir_volume = reservoir_volume - 2.5e5;

// print the new value of the reservoir_volume variable
console.log("Updated reservoir volume : ",reservoir_volume);



