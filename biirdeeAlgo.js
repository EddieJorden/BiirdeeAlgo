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