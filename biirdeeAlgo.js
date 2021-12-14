// algo wil return current profit over costs and
// projected profit over costs
// projected costs based on previous company average during non pandemic
// taking previous revenue per agent - agent commish * agent hours * average profit per sale
// 
// company costs, agent commish, {electricity, food, internet, gas, transport, eServices, advertising, rent} = officeEpenses, 
// each of these categories can potentially be its own method with its own parameters to predict its outcome
// expect to constantly add and update this algorithm for current companyd data for best / closest case predictions.

class Company {
    constructor(name, averageAgentProfit) {
        this.state = {
            averageMonthlyExpenses: 22000,
            averageMonthlyAgentGrossProfit: averageAgentProfit,
            averageMonthlyProfit: 0,
            numberOfAgents: 10,
            name: name
        }
    }
    biirdeeAverageMonthlyRevenue() {
        const grossRevenue = this.state.averageMonthlyAgentGrossProfit * 10
        return `Biirdee's gross revenue is ${grossRevenue}`
    }
    canBiirdeePayTheBills() {
        let averageMonthlyGrossProfit = (this.state.averageMonthlyAgentGrossProfit * this.state.numberOfAgents) - (this.state.averageMonthlyExpenses)
        if(averageMonthlyGrossProfit < 0) {
            return `Biirdee cannot pay the bills, ${this.state.name} is losing ${averageMonthlyGrossProfit} per month`
        }else if(averageMonthlyGrossProfit > 0) {
            return `${this.state.name} is making ${averageMonthlyGrossProfit} more than its bills`
        }else if(averageMonthlyGrossProfit === 0) {
            return `it just so happens that you are breaking totally even`
        }
    }
    biirdeeExpectedRevenue() {
        const expectedGrossRevenue = 30000 * 10
        return `Biirdee's expected gross revenue when the pandemic opens is ${expectedGrossRevenue}`
    }
}

const biirdee = new Company('Biirdee', 6000)

console.log(biirdee.biirdeeAverageMonthlyRevenue())
console.log(biirdee.canBiirdeePayTheBills())
console.log(biirdee.biirdeeExpectedRevenue())