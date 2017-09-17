"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
Object.defineProperty(exports, "__esModule", { value: true });
const should = require("should");
const azureEnvironment_1 = require("../lib/azureEnvironment");
describe('AzureEnvironment', function () {
    it('should show the details of Azure Production environment correctly', function (done) {
        let tempEnv = azureEnvironment_1.AzureEnvironment.Azure;
        tempEnv.name.should.equal('Azure');
        tempEnv.activeDirectoryEndpointUrl.should.equal('https://login.microsoftonline.com/');
        tempEnv.activeDirectoryResourceId.should.equal('https://management.core.windows.net/');
        tempEnv.managementEndpointUrl.should.equal('https://management.core.windows.net');
        tempEnv.resourceManagerEndpointUrl.should.equal('https://management.azure.com/');
        tempEnv.portalUrl.should.equal('https://portal.azure.com');
        should.equal(tempEnv.validateAuthority, true);
        done();
    });
    it('should show the details of Azure China environment correctly', function (done) {
        let tempEnv = azureEnvironment_1.AzureEnvironment.AzureChina;
        tempEnv.name.should.equal('AzureChina');
        tempEnv.activeDirectoryEndpointUrl.should.equal('https://login.chinacloudapi.cn/');
        tempEnv.activeDirectoryResourceId.should.equal('https://management.core.chinacloudapi.cn/');
        tempEnv.managementEndpointUrl.should.equal('https://management.core.chinacloudapi.cn');
        tempEnv.resourceManagerEndpointUrl.should.equal('https://management.chinacloudapi.cn');
        tempEnv.portalUrl.should.equal('https://portal.azure.cn');
        tempEnv.validateAuthority.should.equal(true);
        done();
    });
    it('should show the details of Azure USGovernment environment correctly', function (done) {
        let tempEnv = azureEnvironment_1.AzureEnvironment.AzureUSGovernment;
        tempEnv.name.should.equal('AzureUSGovernment');
        tempEnv.activeDirectoryEndpointUrl.should.equal('https://login-us.microsoftonline.com/');
        tempEnv.activeDirectoryResourceId.should.equal('https://management.core.usgovcloudapi.net/');
        tempEnv.managementEndpointUrl.should.equal('https://management.core.usgovcloudapi.net');
        tempEnv.resourceManagerEndpointUrl.should.equal('https://management.usgovcloudapi.net');
        tempEnv.portalUrl.should.equal('https://portal.azure.us');
        tempEnv.validateAuthority.should.equal(true);
        done();
    });
    it('should show the details of Azure GermanCloud environment correctly', function (done) {
        let tempEnv = azureEnvironment_1.AzureEnvironment.AzureGermanCloud;
        tempEnv.name.should.equal('AzureGermanCloud');
        tempEnv.activeDirectoryEndpointUrl.should.equal('https://login.microsoftonline.de/');
        tempEnv.activeDirectoryResourceId.should.equal('https://management.core.cloudapi.de/');
        tempEnv.managementEndpointUrl.should.equal('https://management.core.cloudapi.de');
        tempEnv.resourceManagerEndpointUrl.should.equal('https://management.microsoftazure.de');
        tempEnv.portalUrl.should.equal('https://portal.microsoftazure.de/');
        tempEnv.validateAuthority.should.equal(true);
        done();
    });
    it('should be able to add a new environment', function (done) {
        var df = {
            name: 'Dogfood',
            portalUrl: 'http://go.microsoft.com/fwlink/?LinkId=254433',
            managementEndpointUrl: 'https://management.core.windows.net',
            resourceManagerEndpointUrl: 'https://management.azure.com/',
            activeDirectoryEndpointUrl: 'https://login.microsoftonline.com/',
            activeDirectoryResourceId: 'https://management.core.windows.net/'
        };
        var tempEnv = azureEnvironment_1.AzureEnvironment;
        tempEnv.add(df);
        var dfood = tempEnv.get(df.name);
        dfood.name.should.equal('Dogfood');
        dfood.activeDirectoryEndpointUrl.should.equal('https://login.microsoftonline.com/');
        dfood.activeDirectoryResourceId.should.equal('https://management.core.windows.net/');
        dfood.managementEndpointUrl.should.equal('https://management.core.windows.net');
        dfood.resourceManagerEndpointUrl.should.equal('https://management.azure.com/');
        dfood.portalUrl.should.equal('http://go.microsoft.com/fwlink/?LinkId=254433');
        should.equal(dfood.validateAuthority, true);
        //Verify that the environment properly got added to the prototype
        tempEnv['Dogfood'].name.should.equal('Dogfood');
        tempEnv['Dogfood'].activeDirectoryEndpointUrl.should.equal('https://login.microsoftonline.com/');
        tempEnv['Dogfood'].activeDirectoryResourceId.should.equal('https://management.core.windows.net/');
        tempEnv['Dogfood'].managementEndpointUrl.should.equal('https://management.core.windows.net');
        tempEnv['Dogfood'].resourceManagerEndpointUrl.should.equal('https://management.azure.com/');
        tempEnv['Dogfood'].portalUrl.should.equal('http://go.microsoft.com/fwlink/?LinkId=254433');
        tempEnv['Dogfood'].validateAuthority.should.equal(true);
        done();
    });
});
//# sourceMappingURL=azureEnvironmentTests.js.map