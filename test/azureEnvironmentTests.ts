// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

import * as should from "should";
import { Environment, EnvironmentParameters } from "../lib/azureEnvironment";

describe("AzureEnvironment", function () {

  it("should show the details of Azure Production environment correctly", function (done) {
    const tempEnv = Environment.AzureCloud;
    tempEnv.name.should.equal("AzureCloud");
    tempEnv.batchResourceId.should.equal("https://batch.core.windows.net/");
    tempEnv.activeDirectoryEndpointUrl.should.equal("https://login.microsoftonline.com/");
    tempEnv.activeDirectoryResourceId.should.equal("https://management.core.windows.net/");
    tempEnv.managementEndpointUrl.should.equal("https://management.core.windows.net");
    tempEnv.resourceManagerEndpointUrl.should.equal("https://management.azure.com/");
    tempEnv.portalUrl.should.equal("https://portal.azure.com");
    should.equal(tempEnv.validateAuthority, true);
    done();
  });

  it("should show Environment.ChinaCloud environment correctly", function (done) {
    const tempEnv = Environment.ChinaCloud;
    tempEnv.name.should.equal("AzureChinaCloud");
    tempEnv.batchResourceId.should.equal("https://batch.chinacloudapi.cn/");
    tempEnv.activeDirectoryEndpointUrl.should.equal("https://login.chinacloudapi.cn/");
    tempEnv.activeDirectoryResourceId.should.equal("https://management.core.chinacloudapi.cn/");
    tempEnv.managementEndpointUrl.should.equal("https://management.core.chinacloudapi.cn");
    tempEnv.resourceManagerEndpointUrl.should.equal("https://management.chinacloudapi.cn");
    tempEnv.portalUrl.should.equal("https://portal.azure.cn");
    tempEnv.validateAuthority.should.equal(true);
    done();
  });

  it("should show the details of Azure USGovernment environment correctly", function (done) {
    const tempEnv = Environment.USGovernment;
    tempEnv.name.should.equal("AzureUSGovernment");
    tempEnv.batchResourceId.should.equal("https://batch.core.usgovcloudapi.net/");
    tempEnv.activeDirectoryEndpointUrl.should.equal("https://login.microsoftonline.us/");
    tempEnv.activeDirectoryResourceId.should.equal("https://management.core.usgovcloudapi.net/");
    tempEnv.managementEndpointUrl.should.equal("https://management.core.usgovcloudapi.net");
    tempEnv.resourceManagerEndpointUrl.should.equal("https://management.usgovcloudapi.net");
    tempEnv.portalUrl.should.equal("https://portal.azure.us");
    tempEnv.validateAuthority.should.equal(true);
    done();
  });

  it("should show the details of Azure GermanCloud environment correctly", function (done) {
    const tempEnv = Environment.GermanCloud;
    tempEnv.name.should.equal("AzureGermanCloud");
    tempEnv.batchResourceId.should.equal("https://batch.microsoftazure.de/");
    tempEnv.activeDirectoryEndpointUrl.should.equal("https://login.microsoftonline.de/");
    tempEnv.activeDirectoryResourceId.should.equal("https://management.core.cloudapi.de/");
    tempEnv.managementEndpointUrl.should.equal("https://management.core.cloudapi.de");
    tempEnv.resourceManagerEndpointUrl.should.equal("https://management.microsoftazure.de");
    tempEnv.portalUrl.should.equal("https://portal.microsoftazure.de/");
    tempEnv.validateAuthority.should.equal(true);
    done();
  });

  it("should be able to add a new environment", function (done) {
    const df: EnvironmentParameters = {
      name: "Dogfood",
      portalUrl: "http://go.microsoft.com/fwlink/?LinkId=254433",
      managementEndpointUrl: "https://management.core.windows.net",
      resourceManagerEndpointUrl: "https://management.azure.com/",
      activeDirectoryEndpointUrl: "https://login.microsoftonline.com/",
      activeDirectoryResourceId: "https://management.core.windows.net/"
    };
    const tempEnv = Environment;
    tempEnv.add(df);
    const dfood = tempEnv.get(df.name);
    dfood.name.should.equal("Dogfood");
    dfood.activeDirectoryEndpointUrl.should.equal("https://login.microsoftonline.com/");
    dfood.activeDirectoryResourceId.should.equal("https://management.core.windows.net/");
    dfood.managementEndpointUrl.should.equal("https://management.core.windows.net");
    dfood.resourceManagerEndpointUrl.should.equal("https://management.azure.com/");
    dfood.portalUrl.should.equal("http://go.microsoft.com/fwlink/?LinkId=254433");
    should.equal(dfood.validateAuthority, true);

    // Verify that the environment properly got added to the prototype
    (<any>tempEnv)["Dogfood"].name.should.equal("Dogfood");
    (<any>tempEnv)["Dogfood"].activeDirectoryEndpointUrl.should.equal("https://login.microsoftonline.com/");
    (<any>tempEnv)["Dogfood"].activeDirectoryResourceId.should.equal("https://management.core.windows.net/");
    (<any>tempEnv)["Dogfood"].managementEndpointUrl.should.equal("https://management.core.windows.net");
    (<any>tempEnv)["Dogfood"].resourceManagerEndpointUrl.should.equal("https://management.azure.com/");
    (<any>tempEnv)["Dogfood"].portalUrl.should.equal("http://go.microsoft.com/fwlink/?LinkId=254433");
    (<any>tempEnv)["Dogfood"].validateAuthority.should.equal(true);
    done();
  });
});