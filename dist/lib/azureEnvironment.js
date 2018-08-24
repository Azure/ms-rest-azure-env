"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
Object.defineProperty(exports, "__esModule", { value: true });
class AzureEnvironment {
    constructor(parameters) {
        // set default
        this.validateAuthority = true;
        if (parameters) {
            // Validate required parameters
            const requiredParams = ["name", "portalUrl", "managementEndpointUrl", "resourceManagerEndpointUrl",
                "activeDirectoryEndpointUrl", "activeDirectoryResourceId"];
            requiredParams.forEach(function (param) {
                if (!parameters[param] || typeof parameters[param].valueOf() !== "string") {
                    throw new Error(`Please provide "${param}" for the environment and it must be of type "string".`);
                }
            });
            // Assign provided parameters
            for (const prop in parameters) {
                this[prop] = parameters[prop];
            }
        }
    }
    static add(parameters) {
        const envContainer = {};
        const envObj = new AzureEnvironment(parameters);
        envContainer[parameters.name] = envObj;
        Object.assign(AzureEnvironment, envContainer);
        return;
    }
    static get(name) {
        if (!name) {
            throw new TypeError("name cannot be null or undefined and must be of type string.");
        }
        return AzureEnvironment[name];
    }
}
AzureEnvironment.Azure = {
    name: "Azure",
    portalUrl: "https://portal.azure.com",
    publishingProfileUrl: "https://go.microsoft.com/fwlink/?LinkId=254432",
    managementEndpointUrl: "https://management.core.windows.net",
    resourceManagerEndpointUrl: "https://management.azure.com/",
    sqlManagementEndpointUrl: "https://management.core.windows.net:8443/",
    sqlServerHostnameSuffix: ".database.windows.net",
    galleryEndpointUrl: "https://gallery.azure.com/",
    activeDirectoryEndpointUrl: "https://login.microsoftonline.com/",
    activeDirectoryResourceId: "https://management.core.windows.net/",
    activeDirectoryGraphResourceId: "https://graph.windows.net/",
    batchResourceId: "https://batch.core.windows.net/",
    activeDirectoryGraphApiVersion: "2013-04-05",
    storageEndpointSuffix: ".core.windows.net",
    keyVaultDnsSuffix: ".vault.azure.net",
    azureDataLakeStoreFileSystemEndpointSuffix: "azuredatalakestore.net",
    azureDataLakeAnalyticsCatalogAndJobEndpointSuffix: "azuredatalakeanalytics.net",
    validateAuthority: true
};
AzureEnvironment.AzureChina = {
    name: "AzureChina",
    portalUrl: "https://portal.azure.cn",
    publishingProfileUrl: "https://go.microsoft.com/fwlink/?LinkID=301774",
    managementEndpointUrl: "https://management.core.chinacloudapi.cn",
    resourceManagerEndpointUrl: "https://management.chinacloudapi.cn",
    sqlManagementEndpointUrl: "https://management.core.chinacloudapi.cn:8443/",
    sqlServerHostnameSuffix: ".database.chinacloudapi.cn",
    galleryEndpointUrl: "https://gallery.chinacloudapi.cn/",
    activeDirectoryEndpointUrl: "https://login.chinacloudapi.cn/",
    activeDirectoryResourceId: "https://management.core.chinacloudapi.cn/",
    activeDirectoryGraphResourceId: "https://graph.chinacloudapi.cn/",
    activeDirectoryGraphApiVersion: "2013-04-05",
    batchResourceId: "https://batch.chinacloudapi.cn/",
    storageEndpointSuffix: ".core.chinacloudapi.cn",
    keyVaultDnsSuffix: ".vault.azure.cn",
    // TODO: add dns suffixes for the china cloud for datalake store and datalake analytics once they are defined.
    azureDataLakeStoreFileSystemEndpointSuffix: "N/A",
    azureDataLakeAnalyticsCatalogAndJobEndpointSuffix: "N/A",
    validateAuthority: true
};
AzureEnvironment.AzureUSGovernment = {
    name: "AzureUSGovernment",
    portalUrl: "https://portal.azure.us",
    publishingProfileUrl: "https://manage.windowsazure.us/publishsettings/index",
    managementEndpointUrl: "https://management.core.usgovcloudapi.net",
    resourceManagerEndpointUrl: "https://management.usgovcloudapi.net",
    sqlManagementEndpointUrl: "https://management.core.usgovcloudapi.net:8443/",
    sqlServerHostnameSuffix: ".database.usgovcloudapi.net",
    galleryEndpointUrl: "https://gallery.usgovcloudapi.net/",
    activeDirectoryEndpointUrl: "https://login-us.microsoftonline.com/",
    activeDirectoryResourceId: "https://management.core.usgovcloudapi.net/",
    activeDirectoryGraphResourceId: "https://graph.windows.net/",
    batchResourceId: "https://batch.core.usgovcloudapi.net/",
    activeDirectoryGraphApiVersion: "2013-04-05",
    storageEndpointSuffix: ".core.usgovcloudapi.net",
    keyVaultDnsSuffix: ".vault.usgovcloudapi.net",
    azureDataLakeStoreFileSystemEndpointSuffix: "N/A",
    azureDataLakeAnalyticsCatalogAndJobEndpointSuffix: "N/A",
    validateAuthority: true
};
AzureEnvironment.AzureGermanCloud = {
    name: "AzureGermanCloud",
    portalUrl: "https://portal.microsoftazure.de/",
    publishingProfileUrl: "https://manage.microsoftazure.de/publishsettings/index",
    managementEndpointUrl: "https://management.core.cloudapi.de",
    resourceManagerEndpointUrl: "https://management.microsoftazure.de",
    sqlManagementEndpointUrl: "https://management.core.cloudapi.de:8443/",
    sqlServerHostnameSuffix: ".database.cloudapi.de",
    galleryEndpointUrl: "https://gallery.cloudapi.de/",
    activeDirectoryEndpointUrl: "https://login.microsoftonline.de/",
    activeDirectoryResourceId: "https://management.core.cloudapi.de/",
    activeDirectoryGraphResourceId: "https://graph.cloudapi.de/",
    batchResourceId: "https://batch.microsoftazure.de/",
    activeDirectoryGraphApiVersion: "2013-04-05",
    storageEndpointSuffix: ".core.cloudapi.de",
    keyVaultDnsSuffix: ".vault.microsoftazure.de",
    azureDataLakeStoreFileSystemEndpointSuffix: "N/A",
    azureDataLakeAnalyticsCatalogAndJobEndpointSuffix: "N/A",
    validateAuthority: true
};
exports.AzureEnvironment = AzureEnvironment;
//# sourceMappingURL=azureEnvironment.js.map