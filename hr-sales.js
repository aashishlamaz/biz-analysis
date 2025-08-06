class SalesModule {
    static createSalesTarget(targetData) {
        const salesRecords = JSON.parse(localStorage.getItem('sales_targets') || '[]');
        salesRecords.push({
            ...targetData,
            currentQuarterSales: 0,
            YTDSales: 0
        });
        localStorage.setItem('sales_targets', JSON.stringify(salesRecords));
        console.log(`Sales target created for ${targetData.eid}`);
    }
}