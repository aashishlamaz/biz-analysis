class FinanceModule {
    static setupPayrollAccount(payrollData) {
        const financeRecords = JSON.parse(localStorage.getItem('finance_payroll') || '[]');
        financeRecords.push({
            ...payrollData,
            accountNumber: `PAY-${payrollData.eid}`,
            paymentHistory: []
        });
        localStorage.setItem('finance_payroll', JSON.stringify(financeRecords));
        console.log(`Payroll account created for ${payrollData.eid}`);
    }
}