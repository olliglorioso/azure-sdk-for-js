# Release History
    
## 17.1.0-beta.1 (2022-07-25)
    
**Features**

  - Added operation group FleetMembers
  - Added operation group Fleets
  - Added operation group ManagedClusterSnapshots
  - Added operation group TrustedAccessRoleBindings
  - Added operation group TrustedAccessRoles
  - Added operation ManagedClusters.beginRotateServiceAccountSigningKeys
  - Added operation ManagedClusters.beginRotateServiceAccountSigningKeysAndWait
  - Added Interface AzureEntityResource
  - Added Interface ErrorAdditionalInfo
  - Added Interface ErrorDetail
  - Added Interface ErrorResponse
  - Added Interface Fleet
  - Added Interface FleetCredentialResult
  - Added Interface FleetCredentialResults
  - Added Interface FleetHubProfile
  - Added Interface FleetListResult
  - Added Interface FleetMember
  - Added Interface FleetMembersCreateOrUpdateOptionalParams
  - Added Interface FleetMembersDeleteOptionalParams
  - Added Interface FleetMembersGetOptionalParams
  - Added Interface FleetMembersListByFleetNextOptionalParams
  - Added Interface FleetMembersListByFleetOptionalParams
  - Added Interface FleetMembersListResult
  - Added Interface FleetPatch
  - Added Interface FleetsCreateOrUpdateOptionalParams
  - Added Interface FleetsDeleteOptionalParams
  - Added Interface FleetsGetOptionalParams
  - Added Interface FleetsListByResourceGroupNextOptionalParams
  - Added Interface FleetsListByResourceGroupOptionalParams
  - Added Interface FleetsListCredentialsOptionalParams
  - Added Interface FleetsListNextOptionalParams
  - Added Interface FleetsListOptionalParams
  - Added Interface FleetsUpdateOptionalParams
  - Added Interface ManagedClusterIngressProfile
  - Added Interface ManagedClusterIngressProfileWebAppRouting
  - Added Interface ManagedClusterOidcIssuerProfile
  - Added Interface ManagedClusterPropertiesForSnapshot
  - Added Interface ManagedClusterSecurityProfileNodeRestriction
  - Added Interface ManagedClusterSecurityProfileWorkloadIdentity
  - Added Interface ManagedClusterSnapshot
  - Added Interface ManagedClusterSnapshotListResult
  - Added Interface ManagedClusterSnapshotsCreateOrUpdateOptionalParams
  - Added Interface ManagedClusterSnapshotsDeleteOptionalParams
  - Added Interface ManagedClusterSnapshotsGetOptionalParams
  - Added Interface ManagedClusterSnapshotsListByResourceGroupNextOptionalParams
  - Added Interface ManagedClusterSnapshotsListByResourceGroupOptionalParams
  - Added Interface ManagedClusterSnapshotsListNextOptionalParams
  - Added Interface ManagedClusterSnapshotsListOptionalParams
  - Added Interface ManagedClusterSnapshotsUpdateTagsOptionalParams
  - Added Interface ManagedClustersRotateServiceAccountSigningKeysOptionalParams
  - Added Interface ManagedClusterStorageProfileBlobCSIDriver
  - Added Interface ManagedClusterWorkloadAutoScalerProfile
  - Added Interface ManagedClusterWorkloadAutoScalerProfileKeda
  - Added Interface NetworkProfileForSnapshot
  - Added Interface TrustedAccessRole
  - Added Interface TrustedAccessRoleBinding
  - Added Interface TrustedAccessRoleBindingListResult
  - Added Interface TrustedAccessRoleBindingsCreateOrUpdateOptionalParams
  - Added Interface TrustedAccessRoleBindingsDeleteOptionalParams
  - Added Interface TrustedAccessRoleBindingsGetOptionalParams
  - Added Interface TrustedAccessRoleBindingsListNextOptionalParams
  - Added Interface TrustedAccessRoleBindingsListOptionalParams
  - Added Interface TrustedAccessRoleListResult
  - Added Interface TrustedAccessRoleRule
  - Added Interface TrustedAccessRolesListNextOptionalParams
  - Added Interface TrustedAccessRolesListOptionalParams
  - Added Type Alias FleetMemberProvisioningState
  - Added Type Alias FleetMembersCreateOrUpdateResponse
  - Added Type Alias FleetMembersGetResponse
  - Added Type Alias FleetMembersListByFleetNextResponse
  - Added Type Alias FleetMembersListByFleetResponse
  - Added Type Alias FleetProvisioningState
  - Added Type Alias FleetsCreateOrUpdateResponse
  - Added Type Alias FleetsGetResponse
  - Added Type Alias FleetsListByResourceGroupNextResponse
  - Added Type Alias FleetsListByResourceGroupResponse
  - Added Type Alias FleetsListCredentialsResponse
  - Added Type Alias FleetsListNextResponse
  - Added Type Alias FleetsListResponse
  - Added Type Alias FleetsUpdateResponse
  - Added Type Alias ManagedClusterSnapshotsCreateOrUpdateResponse
  - Added Type Alias ManagedClusterSnapshotsGetResponse
  - Added Type Alias ManagedClusterSnapshotsListByResourceGroupNextResponse
  - Added Type Alias ManagedClusterSnapshotsListByResourceGroupResponse
  - Added Type Alias ManagedClusterSnapshotsListNextResponse
  - Added Type Alias ManagedClusterSnapshotsListResponse
  - Added Type Alias ManagedClusterSnapshotsUpdateTagsResponse
  - Added Type Alias NetworkPluginMode
  - Added Type Alias TrustedAccessRoleBindingProvisioningState
  - Added Type Alias TrustedAccessRoleBindingsCreateOrUpdateResponse
  - Added Type Alias TrustedAccessRoleBindingsGetResponse
  - Added Type Alias TrustedAccessRoleBindingsListNextResponse
  - Added Type Alias TrustedAccessRoleBindingsListResponse
  - Added Type Alias TrustedAccessRolesListNextResponse
  - Added Type Alias TrustedAccessRolesListResponse
  - Interface AgentPool has a new optional parameter capacityReservationGroupID
  - Interface AgentPool has a new optional parameter enableCustomCATrust
  - Interface AgentPool has a new optional parameter messageOfTheDay
  - Interface AgentPoolsDeleteOptionalParams has a new optional parameter ignorePodDisruptionBudget
  - Interface ContainerServiceNetworkProfile has a new optional parameter networkPluginMode
  - Interface ManagedCluster has a new optional parameter creationData
  - Interface ManagedCluster has a new optional parameter enableNamespaceResources
  - Interface ManagedCluster has a new optional parameter ingressProfile
  - Interface ManagedCluster has a new optional parameter oidcIssuerProfile
  - Interface ManagedCluster has a new optional parameter workloadAutoScalerProfile
  - Interface ManagedClusterAgentPoolProfileProperties has a new optional parameter capacityReservationGroupID
  - Interface ManagedClusterAgentPoolProfileProperties has a new optional parameter enableCustomCATrust
  - Interface ManagedClusterAgentPoolProfileProperties has a new optional parameter messageOfTheDay
  - Interface ManagedClusterAPIServerAccessProfile has a new optional parameter enableVnetIntegration
  - Interface ManagedClusterAPIServerAccessProfile has a new optional parameter subnetId
  - Interface ManagedClusterHttpProxyConfig has a new optional parameter effectiveNoProxy
  - Interface ManagedClustersDeleteOptionalParams has a new optional parameter ignorePodDisruptionBudget
  - Interface ManagedClusterSecurityProfile has a new optional parameter nodeRestriction
  - Interface ManagedClusterSecurityProfile has a new optional parameter workloadIdentity
  - Interface ManagedClusterStorageProfile has a new optional parameter blobCSIDriver
  - Interface ManagedClusterStorageProfileDiskCSIDriver has a new optional parameter version
  - Class ContainerServiceClient has a new parameter fleetMembers
  - Class ContainerServiceClient has a new parameter fleets
  - Class ContainerServiceClient has a new parameter managedClusterSnapshots
  - Class ContainerServiceClient has a new parameter trustedAccessRoleBindings
  - Class ContainerServiceClient has a new parameter trustedAccessRoles
  - Added Enum KnownFleetMemberProvisioningState
  - Added Enum KnownFleetProvisioningState
  - Added Enum KnownNetworkPluginMode
  - Added Enum KnownTrustedAccessRoleBindingProvisioningState
  - Enum KnownOssku has a new value Windows2019
  - Enum KnownOssku has a new value Windows2022
  - Enum KnownSnapshotType has a new value ManagedCluster
    
    
## 17.0.0 (2022-07-22)
    
**Features**

  - Added Interface AgentPool
  - Added Interface AzureKeyVaultKms
  - Added Interface MaintenanceConfiguration
  - Added Interface ManagedCluster
  - Added Interface ManagedClusterAccessProfile
  - Added Interface ManagedClusterAddonProfileIdentity
  - Added Interface ManagedClusterAgentPoolProfile
  - Added Interface ManagedClusterSecurityProfileDefender
  - Added Interface ManagedClusterSecurityProfileDefenderSecurityMonitoring
  - Added Interface Snapshot
  - Added Interface TrackedResource
  - Added Type Alias KeyVaultNetworkAccessTypes
  - Interface ManagedClusterAgentPoolProfileProperties has a new optional parameter hostGroupID
  - Interface ManagedClusterSecurityProfile has a new optional parameter azureKeyVaultKms
  - Interface ManagedClusterSecurityProfile has a new optional parameter defender
  - Added Enum KnownKeyVaultNetworkAccessTypes
  - Enum KnownNetworkPlugin has a new value None

**Breaking Changes**

  - Interface ManagedClusterSecurityProfile no longer has parameter azureDefender
    
    
## 16.1.0 (2022-05-23)
    
**Features**

  - Interface ManagedClusterAgentPoolProfileProperties has a new optional parameter currentOrchestratorVersion
  - Type Alias AgentPool has a new parameter currentOrchestratorVersion
  - Type Alias ManagedCluster has a new parameter currentKubernetesVersion
  - Type Alias ManagedCluster has a new parameter storageProfile
    
    
## 16.0.0 (2022-04-20)
    
**Features**

  - Added Interface ManagedClusterStorageProfile
  - Added Interface ManagedClusterStorageProfileDiskCSIDriver
  - Added Interface ManagedClusterStorageProfileFileCSIDriver
  - Added Interface ManagedClusterStorageProfileSnapshotController
  - Added Type Alias TrackedResource
  - Add parameters of TrackedResource to TypeAlias ManagedCluster
  - Add parameters of TrackedResource to TypeAlias ManagedClusterAccessProfile
  - Add parameters of TrackedResource to TypeAlias Snapshot

**Breaking Changes**

  - Interface Resource no longer has parameter location
  - Interface Resource no longer has parameter tags
  - Delete parameters of Resource in TypeAlias ManagedCluster
  - Delete parameters of Resource in TypeAlias ManagedClusterAccessProfile
  - Delete parameters of Resource in TypeAlias Snapshot
    
    
## 15.2.0 (2022-03-23)
    
**Features**

  - Interface Resource has a new optional parameter systemData
    
    
## 15.1.0 (2022-02-24)
    
**Features**

  - Added Type Alias Format
  - Interface ManagedClustersListClusterUserCredentialsOptionalParams has a new optional parameter format
  - Added Enum KnownFormat
    
    
## 15.0.0 (2021-12-09)

The package of @azure/arm-containerservice is using our next generation design principles since version 15.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
