// modules/shared/scripts/hr-admin.js
class HRAdminIntegration {
    static async getEmployeeAssets(employeeId) {
        const hrData = await fetch('../modules/hr/data/employees.json')
            .then(res => res.json());
        const adminData = await fetch('../modules/admin/data/assets.json')
            .then(res => res.json());
            
        const employee = hrData.find(e => e.id === employeeId);
        return adminData.filter(asset => 
            employee.assets.includes(asset.id)
        );
    }
    
    static assignAsset(employeeId, assetId) {
        // Update both HR and Admin records
        Promise.all([
            fetch('/update-hr-assets', {
                method: 'POST',
                body: JSON.stringify({employeeId, assetId})
            }),
            fetch('/update-admin-assets', {
                method: 'POST',
                body: JSON.stringify({assetId, assignedTo: employeeId})
            })
        ]);
    }
}   