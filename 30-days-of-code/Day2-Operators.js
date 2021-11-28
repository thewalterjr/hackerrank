function solve(meal_cost, tip_percent, tax_percent) {
    // Write your code here
    let total_cost =  meal_cost + meal_cost * tip_percent/100 + meal_cost * tax_percent/100;
        
    console.log(Math.round(total_cost));
}

function main() {
    const meal_cost = parseFloat(readLine().trim());

    const tip_percent = parseInt(readLine().trim(), 10);

    const tax_percent = parseInt(readLine().trim(), 10);

    solve(meal_cost, tip_percent, tax_percent);
}
