// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/lookup';

import type { Data } from '@polkadot/types';
import type { BTreeMap, Bytes, Compact, Enum, Null, Option, Result, Struct, Text, U256, U8aFixed, Vec, bool, i32, i64, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { Vote } from '@polkadot/types/interfaces/elections';
import type { Era } from '@polkadot/types/interfaces/extrinsics';
import type { AccountId32, Call, H160, H256, MultiAddress, PerU16, Perbill, Percent, Permill, Perquintill } from '@polkadot/types/interfaces/runtime';
import type { Event } from '@polkadot/types/interfaces/system';

declare module '@polkadot/types/lookup' {
  /** @name FrameSystemAccountInfo (3) */
  interface FrameSystemAccountInfo extends Struct {
    readonly nonce: u32;
    readonly consumers: u32;
    readonly providers: u32;
    readonly sufficients: u32;
    readonly data: PalletBalancesAccountData;
  }

  /** @name PalletBalancesAccountData (5) */
  interface PalletBalancesAccountData extends Struct {
    readonly free: u128;
    readonly reserved: u128;
    readonly frozen: u128;
    readonly flags: u128;
  }

  /** @name FrameSupportDispatchPerDispatchClassWeight (9) */
  interface FrameSupportDispatchPerDispatchClassWeight extends Struct {
    readonly normal: SpWeightsWeightV2Weight;
    readonly operational: SpWeightsWeightV2Weight;
    readonly mandatory: SpWeightsWeightV2Weight;
  }

  /** @name SpWeightsWeightV2Weight (10) */
  interface SpWeightsWeightV2Weight extends Struct {
    readonly refTime: Compact<u64>;
    readonly proofSize: Compact<u64>;
  }

  /** @name SpRuntimeDigest (15) */
  interface SpRuntimeDigest extends Struct {
    readonly logs: Vec<SpRuntimeDigestDigestItem>;
  }

  /** @name SpRuntimeDigestDigestItem (17) */
  interface SpRuntimeDigestDigestItem extends Enum {
    readonly isOther: boolean;
    readonly asOther: Bytes;
    readonly isConsensus: boolean;
    readonly asConsensus: ITuple<[U8aFixed, Bytes]>;
    readonly isSeal: boolean;
    readonly asSeal: ITuple<[U8aFixed, Bytes]>;
    readonly isPreRuntime: boolean;
    readonly asPreRuntime: ITuple<[U8aFixed, Bytes]>;
    readonly isRuntimeEnvironmentUpdated: boolean;
    readonly type: 'Other' | 'Consensus' | 'Seal' | 'PreRuntime' | 'RuntimeEnvironmentUpdated';
  }

  /** @name FrameSystemEventRecord (20) */
  interface FrameSystemEventRecord extends Struct {
    readonly phase: FrameSystemPhase;
    readonly event: Event;
    readonly topics: Vec<H256>;
  }

  /** @name FrameSystemEvent (22) */
  interface FrameSystemEvent extends Enum {
    readonly isExtrinsicSuccess: boolean;
    readonly asExtrinsicSuccess: {
      readonly dispatchInfo: FrameSystemDispatchEventInfo;
    } & Struct;
    readonly isExtrinsicFailed: boolean;
    readonly asExtrinsicFailed: {
      readonly dispatchError: SpRuntimeDispatchError;
      readonly dispatchInfo: FrameSystemDispatchEventInfo;
    } & Struct;
    readonly isCodeUpdated: boolean;
    readonly isNewAccount: boolean;
    readonly asNewAccount: {
      readonly account: AccountId32;
    } & Struct;
    readonly isKilledAccount: boolean;
    readonly asKilledAccount: {
      readonly account: AccountId32;
    } & Struct;
    readonly isRemarked: boolean;
    readonly asRemarked: {
      readonly sender: AccountId32;
      readonly hash_: H256;
    } & Struct;
    readonly isUpgradeAuthorized: boolean;
    readonly asUpgradeAuthorized: {
      readonly codeHash: H256;
      readonly checkVersion: bool;
    } & Struct;
    readonly isRejectedInvalidAuthorizedUpgrade: boolean;
    readonly asRejectedInvalidAuthorizedUpgrade: {
      readonly codeHash: H256;
      readonly error: SpRuntimeDispatchError;
    } & Struct;
    readonly type: 'ExtrinsicSuccess' | 'ExtrinsicFailed' | 'CodeUpdated' | 'NewAccount' | 'KilledAccount' | 'Remarked' | 'UpgradeAuthorized' | 'RejectedInvalidAuthorizedUpgrade';
  }

  /** @name FrameSystemDispatchEventInfo (23) */
  interface FrameSystemDispatchEventInfo extends Struct {
    readonly weight: SpWeightsWeightV2Weight;
    readonly class: FrameSupportDispatchDispatchClass;
    readonly paysFee: FrameSupportDispatchPays;
  }

  /** @name FrameSupportDispatchDispatchClass (24) */
  interface FrameSupportDispatchDispatchClass extends Enum {
    readonly isNormal: boolean;
    readonly isOperational: boolean;
    readonly isMandatory: boolean;
    readonly type: 'Normal' | 'Operational' | 'Mandatory';
  }

  /** @name FrameSupportDispatchPays (25) */
  interface FrameSupportDispatchPays extends Enum {
    readonly isYes: boolean;
    readonly isNo: boolean;
    readonly type: 'Yes' | 'No';
  }

  /** @name SpRuntimeDispatchError (26) */
  interface SpRuntimeDispatchError extends Enum {
    readonly isOther: boolean;
    readonly isCannotLookup: boolean;
    readonly isBadOrigin: boolean;
    readonly isModule: boolean;
    readonly asModule: SpRuntimeModuleError;
    readonly isConsumerRemaining: boolean;
    readonly isNoProviders: boolean;
    readonly isTooManyConsumers: boolean;
    readonly isToken: boolean;
    readonly asToken: SpRuntimeTokenError;
    readonly isArithmetic: boolean;
    readonly asArithmetic: SpArithmeticArithmeticError;
    readonly isTransactional: boolean;
    readonly asTransactional: SpRuntimeTransactionalError;
    readonly isExhausted: boolean;
    readonly isCorruption: boolean;
    readonly isUnavailable: boolean;
    readonly isRootNotAllowed: boolean;
    readonly isTrie: boolean;
    readonly asTrie: SpRuntimeProvingTrieTrieError;
    readonly type: 'Other' | 'CannotLookup' | 'BadOrigin' | 'Module' | 'ConsumerRemaining' | 'NoProviders' | 'TooManyConsumers' | 'Token' | 'Arithmetic' | 'Transactional' | 'Exhausted' | 'Corruption' | 'Unavailable' | 'RootNotAllowed' | 'Trie';
  }

  /** @name SpRuntimeModuleError (27) */
  interface SpRuntimeModuleError extends Struct {
    readonly index: u8;
    readonly error: U8aFixed;
  }

  /** @name SpRuntimeTokenError (28) */
  interface SpRuntimeTokenError extends Enum {
    readonly isFundsUnavailable: boolean;
    readonly isOnlyProvider: boolean;
    readonly isBelowMinimum: boolean;
    readonly isCannotCreate: boolean;
    readonly isUnknownAsset: boolean;
    readonly isFrozen: boolean;
    readonly isUnsupported: boolean;
    readonly isCannotCreateHold: boolean;
    readonly isNotExpendable: boolean;
    readonly isBlocked: boolean;
    readonly type: 'FundsUnavailable' | 'OnlyProvider' | 'BelowMinimum' | 'CannotCreate' | 'UnknownAsset' | 'Frozen' | 'Unsupported' | 'CannotCreateHold' | 'NotExpendable' | 'Blocked';
  }

  /** @name SpArithmeticArithmeticError (29) */
  interface SpArithmeticArithmeticError extends Enum {
    readonly isUnderflow: boolean;
    readonly isOverflow: boolean;
    readonly isDivisionByZero: boolean;
    readonly type: 'Underflow' | 'Overflow' | 'DivisionByZero';
  }

  /** @name SpRuntimeTransactionalError (30) */
  interface SpRuntimeTransactionalError extends Enum {
    readonly isLimitReached: boolean;
    readonly isNoLayer: boolean;
    readonly type: 'LimitReached' | 'NoLayer';
  }

  /** @name SpRuntimeProvingTrieTrieError (31) */
  interface SpRuntimeProvingTrieTrieError extends Enum {
    readonly isInvalidStateRoot: boolean;
    readonly isIncompleteDatabase: boolean;
    readonly isValueAtIncompleteKey: boolean;
    readonly isDecoderError: boolean;
    readonly isInvalidHash: boolean;
    readonly isDuplicateKey: boolean;
    readonly isExtraneousNode: boolean;
    readonly isExtraneousValue: boolean;
    readonly isExtraneousHashReference: boolean;
    readonly isInvalidChildReference: boolean;
    readonly isValueMismatch: boolean;
    readonly isIncompleteProof: boolean;
    readonly isRootMismatch: boolean;
    readonly isDecodeError: boolean;
    readonly type: 'InvalidStateRoot' | 'IncompleteDatabase' | 'ValueAtIncompleteKey' | 'DecoderError' | 'InvalidHash' | 'DuplicateKey' | 'ExtraneousNode' | 'ExtraneousValue' | 'ExtraneousHashReference' | 'InvalidChildReference' | 'ValueMismatch' | 'IncompleteProof' | 'RootMismatch' | 'DecodeError';
  }

  /** @name PalletUtilityEvent (32) */
  interface PalletUtilityEvent extends Enum {
    readonly isBatchInterrupted: boolean;
    readonly asBatchInterrupted: {
      readonly index: u32;
      readonly error: SpRuntimeDispatchError;
    } & Struct;
    readonly isBatchCompleted: boolean;
    readonly isBatchCompletedWithErrors: boolean;
    readonly isItemCompleted: boolean;
    readonly isItemFailed: boolean;
    readonly asItemFailed: {
      readonly error: SpRuntimeDispatchError;
    } & Struct;
    readonly isDispatchedAs: boolean;
    readonly asDispatchedAs: {
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isIfElseMainSuccess: boolean;
    readonly isIfElseFallbackCalled: boolean;
    readonly asIfElseFallbackCalled: {
      readonly mainError: SpRuntimeDispatchError;
    } & Struct;
    readonly type: 'BatchInterrupted' | 'BatchCompleted' | 'BatchCompletedWithErrors' | 'ItemCompleted' | 'ItemFailed' | 'DispatchedAs' | 'IfElseMainSuccess' | 'IfElseFallbackCalled';
  }

  /** @name PalletIndicesEvent (35) */
  interface PalletIndicesEvent extends Enum {
    readonly isIndexAssigned: boolean;
    readonly asIndexAssigned: {
      readonly who: AccountId32;
      readonly index: u32;
    } & Struct;
    readonly isIndexFreed: boolean;
    readonly asIndexFreed: {
      readonly index: u32;
    } & Struct;
    readonly isIndexFrozen: boolean;
    readonly asIndexFrozen: {
      readonly index: u32;
      readonly who: AccountId32;
    } & Struct;
    readonly isDepositPoked: boolean;
    readonly asDepositPoked: {
      readonly who: AccountId32;
      readonly index: u32;
      readonly oldDeposit: u128;
      readonly newDeposit: u128;
    } & Struct;
    readonly type: 'IndexAssigned' | 'IndexFreed' | 'IndexFrozen' | 'DepositPoked';
  }

  /** @name PalletBalancesEvent (36) */
  interface PalletBalancesEvent extends Enum {
    readonly isEndowed: boolean;
    readonly asEndowed: {
      readonly account: AccountId32;
      readonly freeBalance: u128;
    } & Struct;
    readonly isDustLost: boolean;
    readonly asDustLost: {
      readonly account: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isBalanceSet: boolean;
    readonly asBalanceSet: {
      readonly who: AccountId32;
      readonly free: u128;
    } & Struct;
    readonly isReserved: boolean;
    readonly asReserved: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUnreserved: boolean;
    readonly asUnreserved: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isReserveRepatriated: boolean;
    readonly asReserveRepatriated: {
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
      readonly destinationStatus: FrameSupportTokensMiscBalanceStatus;
    } & Struct;
    readonly isDeposit: boolean;
    readonly asDeposit: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isWithdraw: boolean;
    readonly asWithdraw: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSlashed: boolean;
    readonly asSlashed: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isMinted: boolean;
    readonly asMinted: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isBurned: boolean;
    readonly asBurned: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSuspended: boolean;
    readonly asSuspended: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isRestored: boolean;
    readonly asRestored: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUpgraded: boolean;
    readonly asUpgraded: {
      readonly who: AccountId32;
    } & Struct;
    readonly isIssued: boolean;
    readonly asIssued: {
      readonly amount: u128;
    } & Struct;
    readonly isRescinded: boolean;
    readonly asRescinded: {
      readonly amount: u128;
    } & Struct;
    readonly isLocked: boolean;
    readonly asLocked: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUnlocked: boolean;
    readonly asUnlocked: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isFrozen: boolean;
    readonly asFrozen: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isThawed: boolean;
    readonly asThawed: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isTotalIssuanceForced: boolean;
    readonly asTotalIssuanceForced: {
      readonly old: u128;
      readonly new_: u128;
    } & Struct;
    readonly type: 'Endowed' | 'DustLost' | 'Transfer' | 'BalanceSet' | 'Reserved' | 'Unreserved' | 'ReserveRepatriated' | 'Deposit' | 'Withdraw' | 'Slashed' | 'Minted' | 'Burned' | 'Suspended' | 'Restored' | 'Upgraded' | 'Issued' | 'Rescinded' | 'Locked' | 'Unlocked' | 'Frozen' | 'Thawed' | 'TotalIssuanceForced';
  }

  /** @name FrameSupportTokensMiscBalanceStatus (37) */
  interface FrameSupportTokensMiscBalanceStatus extends Enum {
    readonly isFree: boolean;
    readonly isReserved: boolean;
    readonly type: 'Free' | 'Reserved';
  }

  /** @name PalletTransactionPaymentEvent (38) */
  interface PalletTransactionPaymentEvent extends Enum {
    readonly isTransactionFeePaid: boolean;
    readonly asTransactionFeePaid: {
      readonly who: AccountId32;
      readonly actualFee: u128;
      readonly tip: u128;
    } & Struct;
    readonly type: 'TransactionFeePaid';
  }

  /** @name PalletAssetConversionTxPaymentEvent (39) */
  interface PalletAssetConversionTxPaymentEvent extends Enum {
    readonly isAssetTxFeePaid: boolean;
    readonly asAssetTxFeePaid: {
      readonly who: AccountId32;
      readonly actualFee: u128;
      readonly tip: u128;
      readonly assetId: FrameSupportTokensFungibleUnionOfNativeOrWithId;
    } & Struct;
    readonly isAssetRefundFailed: boolean;
    readonly asAssetRefundFailed: {
      readonly nativeAmountKept: u128;
    } & Struct;
    readonly type: 'AssetTxFeePaid' | 'AssetRefundFailed';
  }

  /** @name FrameSupportTokensFungibleUnionOfNativeOrWithId (40) */
  interface FrameSupportTokensFungibleUnionOfNativeOrWithId extends Enum {
    readonly isNative: boolean;
    readonly isWithId: boolean;
    readonly asWithId: u32;
    readonly type: 'Native' | 'WithId';
  }

  /** @name PalletElectionProviderMultiPhaseEvent (41) */
  interface PalletElectionProviderMultiPhaseEvent extends Enum {
    readonly isSolutionStored: boolean;
    readonly asSolutionStored: {
      readonly compute: PalletElectionProviderMultiPhaseElectionCompute;
      readonly origin: Option<AccountId32>;
      readonly prevEjected: bool;
    } & Struct;
    readonly isElectionFinalized: boolean;
    readonly asElectionFinalized: {
      readonly compute: PalletElectionProviderMultiPhaseElectionCompute;
      readonly score: SpNposElectionsElectionScore;
    } & Struct;
    readonly isElectionFailed: boolean;
    readonly isRewarded: boolean;
    readonly asRewarded: {
      readonly account: AccountId32;
      readonly value: u128;
    } & Struct;
    readonly isSlashed: boolean;
    readonly asSlashed: {
      readonly account: AccountId32;
      readonly value: u128;
    } & Struct;
    readonly isPhaseTransitioned: boolean;
    readonly asPhaseTransitioned: {
      readonly from: PalletElectionProviderMultiPhasePhase;
      readonly to: PalletElectionProviderMultiPhasePhase;
      readonly round: u32;
    } & Struct;
    readonly type: 'SolutionStored' | 'ElectionFinalized' | 'ElectionFailed' | 'Rewarded' | 'Slashed' | 'PhaseTransitioned';
  }

  /** @name PalletElectionProviderMultiPhaseElectionCompute (42) */
  interface PalletElectionProviderMultiPhaseElectionCompute extends Enum {
    readonly isOnChain: boolean;
    readonly isSigned: boolean;
    readonly isUnsigned: boolean;
    readonly isFallback: boolean;
    readonly isEmergency: boolean;
    readonly type: 'OnChain' | 'Signed' | 'Unsigned' | 'Fallback' | 'Emergency';
  }

  /** @name SpNposElectionsElectionScore (44) */
  interface SpNposElectionsElectionScore extends Struct {
    readonly minimalStake: u128;
    readonly sumStake: u128;
    readonly sumStakeSquared: u128;
  }

  /** @name PalletElectionProviderMultiPhasePhase (45) */
  interface PalletElectionProviderMultiPhasePhase extends Enum {
    readonly isOff: boolean;
    readonly isSigned: boolean;
    readonly isUnsigned: boolean;
    readonly asUnsigned: ITuple<[bool, u32]>;
    readonly isEmergency: boolean;
    readonly type: 'Off' | 'Signed' | 'Unsigned' | 'Emergency';
  }

  /** @name PalletStakingPalletEvent (47) */
  interface PalletStakingPalletEvent extends Enum {
    readonly isEraPaid: boolean;
    readonly asEraPaid: {
      readonly eraIndex: u32;
      readonly validatorPayout: u128;
      readonly remainder: u128;
    } & Struct;
    readonly isRewarded: boolean;
    readonly asRewarded: {
      readonly stash: AccountId32;
      readonly dest: PalletStakingRewardDestination;
      readonly amount: u128;
    } & Struct;
    readonly isSlashed: boolean;
    readonly asSlashed: {
      readonly staker: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSlashReported: boolean;
    readonly asSlashReported: {
      readonly validator: AccountId32;
      readonly fraction: Perbill;
      readonly slashEra: u32;
    } & Struct;
    readonly isOldSlashingReportDiscarded: boolean;
    readonly asOldSlashingReportDiscarded: {
      readonly sessionIndex: u32;
    } & Struct;
    readonly isStakersElected: boolean;
    readonly isBonded: boolean;
    readonly asBonded: {
      readonly stash: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUnbonded: boolean;
    readonly asUnbonded: {
      readonly stash: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isWithdrawn: boolean;
    readonly asWithdrawn: {
      readonly stash: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isKicked: boolean;
    readonly asKicked: {
      readonly nominator: AccountId32;
      readonly stash: AccountId32;
    } & Struct;
    readonly isStakingElectionFailed: boolean;
    readonly isChilled: boolean;
    readonly asChilled: {
      readonly stash: AccountId32;
    } & Struct;
    readonly isPayoutStarted: boolean;
    readonly asPayoutStarted: {
      readonly eraIndex: u32;
      readonly validatorStash: AccountId32;
      readonly page: u32;
      readonly next: Option<u32>;
    } & Struct;
    readonly isValidatorPrefsSet: boolean;
    readonly asValidatorPrefsSet: {
      readonly stash: AccountId32;
      readonly prefs: PalletStakingValidatorPrefs;
    } & Struct;
    readonly isSnapshotVotersSizeExceeded: boolean;
    readonly asSnapshotVotersSizeExceeded: {
      readonly size_: u32;
    } & Struct;
    readonly isSnapshotTargetsSizeExceeded: boolean;
    readonly asSnapshotTargetsSizeExceeded: {
      readonly size_: u32;
    } & Struct;
    readonly isForceEra: boolean;
    readonly asForceEra: {
      readonly mode: PalletStakingForcing;
    } & Struct;
    readonly isControllerBatchDeprecated: boolean;
    readonly asControllerBatchDeprecated: {
      readonly failures: u32;
    } & Struct;
    readonly isCurrencyMigrated: boolean;
    readonly asCurrencyMigrated: {
      readonly stash: AccountId32;
      readonly forceWithdraw: u128;
    } & Struct;
    readonly type: 'EraPaid' | 'Rewarded' | 'Slashed' | 'SlashReported' | 'OldSlashingReportDiscarded' | 'StakersElected' | 'Bonded' | 'Unbonded' | 'Withdrawn' | 'Kicked' | 'StakingElectionFailed' | 'Chilled' | 'PayoutStarted' | 'ValidatorPrefsSet' | 'SnapshotVotersSizeExceeded' | 'SnapshotTargetsSizeExceeded' | 'ForceEra' | 'ControllerBatchDeprecated' | 'CurrencyMigrated';
  }

  /** @name PalletStakingRewardDestination (48) */
  interface PalletStakingRewardDestination extends Enum {
    readonly isStaked: boolean;
    readonly isStash: boolean;
    readonly isController: boolean;
    readonly isAccount: boolean;
    readonly asAccount: AccountId32;
    readonly isNone: boolean;
    readonly type: 'Staked' | 'Stash' | 'Controller' | 'Account' | 'None';
  }

  /** @name PalletStakingValidatorPrefs (51) */
  interface PalletStakingValidatorPrefs extends Struct {
    readonly commission: Compact<Perbill>;
    readonly blocked: bool;
  }

  /** @name PalletStakingForcing (53) */
  interface PalletStakingForcing extends Enum {
    readonly isNotForcing: boolean;
    readonly isForceNew: boolean;
    readonly isForceNone: boolean;
    readonly isForceAlways: boolean;
    readonly type: 'NotForcing' | 'ForceNew' | 'ForceNone' | 'ForceAlways';
  }

  /** @name PalletSessionEvent (54) */
  interface PalletSessionEvent extends Enum {
    readonly isNewSession: boolean;
    readonly asNewSession: {
      readonly sessionIndex: u32;
    } & Struct;
    readonly isValidatorDisabled: boolean;
    readonly asValidatorDisabled: {
      readonly validator: AccountId32;
    } & Struct;
    readonly isValidatorReenabled: boolean;
    readonly asValidatorReenabled: {
      readonly validator: AccountId32;
    } & Struct;
    readonly type: 'NewSession' | 'ValidatorDisabled' | 'ValidatorReenabled';
  }

  /** @name PalletDemocracyEvent (55) */
  interface PalletDemocracyEvent extends Enum {
    readonly isProposed: boolean;
    readonly asProposed: {
      readonly proposalIndex: u32;
      readonly deposit: u128;
    } & Struct;
    readonly isTabled: boolean;
    readonly asTabled: {
      readonly proposalIndex: u32;
      readonly deposit: u128;
    } & Struct;
    readonly isExternalTabled: boolean;
    readonly isStarted: boolean;
    readonly asStarted: {
      readonly refIndex: u32;
      readonly threshold: PalletDemocracyVoteThreshold;
    } & Struct;
    readonly isPassed: boolean;
    readonly asPassed: {
      readonly refIndex: u32;
    } & Struct;
    readonly isNotPassed: boolean;
    readonly asNotPassed: {
      readonly refIndex: u32;
    } & Struct;
    readonly isCancelled: boolean;
    readonly asCancelled: {
      readonly refIndex: u32;
    } & Struct;
    readonly isDelegated: boolean;
    readonly asDelegated: {
      readonly who: AccountId32;
      readonly target: AccountId32;
    } & Struct;
    readonly isUndelegated: boolean;
    readonly asUndelegated: {
      readonly account: AccountId32;
    } & Struct;
    readonly isVetoed: boolean;
    readonly asVetoed: {
      readonly who: AccountId32;
      readonly proposalHash: H256;
      readonly until: u32;
    } & Struct;
    readonly isBlacklisted: boolean;
    readonly asBlacklisted: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isVoted: boolean;
    readonly asVoted: {
      readonly voter: AccountId32;
      readonly refIndex: u32;
      readonly vote: PalletDemocracyVoteAccountVote;
    } & Struct;
    readonly isSeconded: boolean;
    readonly asSeconded: {
      readonly seconder: AccountId32;
      readonly propIndex: u32;
    } & Struct;
    readonly isProposalCanceled: boolean;
    readonly asProposalCanceled: {
      readonly propIndex: u32;
    } & Struct;
    readonly isMetadataSet: boolean;
    readonly asMetadataSet: {
      readonly owner: PalletDemocracyMetadataOwner;
      readonly hash_: H256;
    } & Struct;
    readonly isMetadataCleared: boolean;
    readonly asMetadataCleared: {
      readonly owner: PalletDemocracyMetadataOwner;
      readonly hash_: H256;
    } & Struct;
    readonly isMetadataTransferred: boolean;
    readonly asMetadataTransferred: {
      readonly prevOwner: PalletDemocracyMetadataOwner;
      readonly owner: PalletDemocracyMetadataOwner;
      readonly hash_: H256;
    } & Struct;
    readonly type: 'Proposed' | 'Tabled' | 'ExternalTabled' | 'Started' | 'Passed' | 'NotPassed' | 'Cancelled' | 'Delegated' | 'Undelegated' | 'Vetoed' | 'Blacklisted' | 'Voted' | 'Seconded' | 'ProposalCanceled' | 'MetadataSet' | 'MetadataCleared' | 'MetadataTransferred';
  }

  /** @name PalletDemocracyVoteThreshold (56) */
  interface PalletDemocracyVoteThreshold extends Enum {
    readonly isSuperMajorityApprove: boolean;
    readonly isSuperMajorityAgainst: boolean;
    readonly isSimpleMajority: boolean;
    readonly type: 'SuperMajorityApprove' | 'SuperMajorityAgainst' | 'SimpleMajority';
  }

  /** @name PalletDemocracyVoteAccountVote (57) */
  interface PalletDemocracyVoteAccountVote extends Enum {
    readonly isStandard: boolean;
    readonly asStandard: {
      readonly vote: Vote;
      readonly balance: u128;
    } & Struct;
    readonly isSplit: boolean;
    readonly asSplit: {
      readonly aye: u128;
      readonly nay: u128;
    } & Struct;
    readonly type: 'Standard' | 'Split';
  }

  /** @name PalletDemocracyMetadataOwner (59) */
  interface PalletDemocracyMetadataOwner extends Enum {
    readonly isExternal: boolean;
    readonly isProposal: boolean;
    readonly asProposal: u32;
    readonly isReferendum: boolean;
    readonly asReferendum: u32;
    readonly type: 'External' | 'Proposal' | 'Referendum';
  }

  /** @name PalletCollectiveEvent (60) */
  interface PalletCollectiveEvent extends Enum {
    readonly isProposed: boolean;
    readonly asProposed: {
      readonly account: AccountId32;
      readonly proposalIndex: u32;
      readonly proposalHash: H256;
      readonly threshold: u32;
    } & Struct;
    readonly isVoted: boolean;
    readonly asVoted: {
      readonly account: AccountId32;
      readonly proposalHash: H256;
      readonly voted: bool;
      readonly yes: u32;
      readonly no: u32;
    } & Struct;
    readonly isApproved: boolean;
    readonly asApproved: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isDisapproved: boolean;
    readonly asDisapproved: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isExecuted: boolean;
    readonly asExecuted: {
      readonly proposalHash: H256;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isMemberExecuted: boolean;
    readonly asMemberExecuted: {
      readonly proposalHash: H256;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isClosed: boolean;
    readonly asClosed: {
      readonly proposalHash: H256;
      readonly yes: u32;
      readonly no: u32;
    } & Struct;
    readonly isKilled: boolean;
    readonly asKilled: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isProposalCostBurned: boolean;
    readonly asProposalCostBurned: {
      readonly proposalHash: H256;
      readonly who: AccountId32;
    } & Struct;
    readonly isProposalCostReleased: boolean;
    readonly asProposalCostReleased: {
      readonly proposalHash: H256;
      readonly who: AccountId32;
    } & Struct;
    readonly type: 'Proposed' | 'Voted' | 'Approved' | 'Disapproved' | 'Executed' | 'MemberExecuted' | 'Closed' | 'Killed' | 'ProposalCostBurned' | 'ProposalCostReleased';
  }

  /** @name PalletElectionsPhragmenEvent (62) */
  interface PalletElectionsPhragmenEvent extends Enum {
    readonly isNewTerm: boolean;
    readonly asNewTerm: {
      readonly newMembers: Vec<ITuple<[AccountId32, u128]>>;
    } & Struct;
    readonly isEmptyTerm: boolean;
    readonly isElectionError: boolean;
    readonly isMemberKicked: boolean;
    readonly asMemberKicked: {
      readonly member: AccountId32;
    } & Struct;
    readonly isRenounced: boolean;
    readonly asRenounced: {
      readonly candidate: AccountId32;
    } & Struct;
    readonly isCandidateSlashed: boolean;
    readonly asCandidateSlashed: {
      readonly candidate: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSeatHolderSlashed: boolean;
    readonly asSeatHolderSlashed: {
      readonly seatHolder: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'NewTerm' | 'EmptyTerm' | 'ElectionError' | 'MemberKicked' | 'Renounced' | 'CandidateSlashed' | 'SeatHolderSlashed';
  }

  /** @name PalletMembershipEvent (65) */
  interface PalletMembershipEvent extends Enum {
    readonly isMemberAdded: boolean;
    readonly isMemberRemoved: boolean;
    readonly isMembersSwapped: boolean;
    readonly isMembersReset: boolean;
    readonly isKeyChanged: boolean;
    readonly isDummy: boolean;
    readonly type: 'MemberAdded' | 'MemberRemoved' | 'MembersSwapped' | 'MembersReset' | 'KeyChanged' | 'Dummy';
  }

  /** @name PalletGrandpaEvent (66) */
  interface PalletGrandpaEvent extends Enum {
    readonly isNewAuthorities: boolean;
    readonly asNewAuthorities: {
      readonly authoritySet: Vec<ITuple<[SpConsensusGrandpaAppPublic, u64]>>;
    } & Struct;
    readonly isPaused: boolean;
    readonly isResumed: boolean;
    readonly type: 'NewAuthorities' | 'Paused' | 'Resumed';
  }

  /** @name SpConsensusGrandpaAppPublic (69) */
  interface SpConsensusGrandpaAppPublic extends U8aFixed {}

  /** @name PalletTreasuryEvent (70) */
  interface PalletTreasuryEvent extends Enum {
    readonly isSpending: boolean;
    readonly asSpending: {
      readonly budgetRemaining: u128;
    } & Struct;
    readonly isAwarded: boolean;
    readonly asAwarded: {
      readonly proposalIndex: u32;
      readonly award: u128;
      readonly account: AccountId32;
    } & Struct;
    readonly isBurnt: boolean;
    readonly asBurnt: {
      readonly burntFunds: u128;
    } & Struct;
    readonly isRollover: boolean;
    readonly asRollover: {
      readonly rolloverBalance: u128;
    } & Struct;
    readonly isDeposit: boolean;
    readonly asDeposit: {
      readonly value: u128;
    } & Struct;
    readonly isSpendApproved: boolean;
    readonly asSpendApproved: {
      readonly proposalIndex: u32;
      readonly amount: u128;
      readonly beneficiary: AccountId32;
    } & Struct;
    readonly isUpdatedInactive: boolean;
    readonly asUpdatedInactive: {
      readonly reactivated: u128;
      readonly deactivated: u128;
    } & Struct;
    readonly isAssetSpendApproved: boolean;
    readonly asAssetSpendApproved: {
      readonly index: u32;
      readonly assetKind: FrameSupportTokensFungibleUnionOfNativeOrWithId;
      readonly amount: u128;
      readonly beneficiary: AccountId32;
      readonly validFrom: u32;
      readonly expireAt: u32;
    } & Struct;
    readonly isAssetSpendVoided: boolean;
    readonly asAssetSpendVoided: {
      readonly index: u32;
    } & Struct;
    readonly isPaid: boolean;
    readonly asPaid: {
      readonly index: u32;
      readonly paymentId: Null;
    } & Struct;
    readonly isPaymentFailed: boolean;
    readonly asPaymentFailed: {
      readonly index: u32;
      readonly paymentId: Null;
    } & Struct;
    readonly isSpendProcessed: boolean;
    readonly asSpendProcessed: {
      readonly index: u32;
    } & Struct;
    readonly type: 'Spending' | 'Awarded' | 'Burnt' | 'Rollover' | 'Deposit' | 'SpendApproved' | 'UpdatedInactive' | 'AssetSpendApproved' | 'AssetSpendVoided' | 'Paid' | 'PaymentFailed' | 'SpendProcessed';
  }

  /** @name PalletAssetRateEvent (71) */
  interface PalletAssetRateEvent extends Enum {
    readonly isAssetRateCreated: boolean;
    readonly asAssetRateCreated: {
      readonly assetKind: FrameSupportTokensFungibleUnionOfNativeOrWithId;
      readonly rate: u128;
    } & Struct;
    readonly isAssetRateRemoved: boolean;
    readonly asAssetRateRemoved: {
      readonly assetKind: FrameSupportTokensFungibleUnionOfNativeOrWithId;
    } & Struct;
    readonly isAssetRateUpdated: boolean;
    readonly asAssetRateUpdated: {
      readonly assetKind: FrameSupportTokensFungibleUnionOfNativeOrWithId;
      readonly old: u128;
      readonly new_: u128;
    } & Struct;
    readonly type: 'AssetRateCreated' | 'AssetRateRemoved' | 'AssetRateUpdated';
  }

  /** @name PalletContractsEvent (73) */
  interface PalletContractsEvent extends Enum {
    readonly isInstantiated: boolean;
    readonly asInstantiated: {
      readonly deployer: AccountId32;
      readonly contract: AccountId32;
    } & Struct;
    readonly isTerminated: boolean;
    readonly asTerminated: {
      readonly contract: AccountId32;
      readonly beneficiary: AccountId32;
    } & Struct;
    readonly isCodeStored: boolean;
    readonly asCodeStored: {
      readonly codeHash: H256;
      readonly depositHeld: u128;
      readonly uploader: AccountId32;
    } & Struct;
    readonly isContractEmitted: boolean;
    readonly asContractEmitted: {
      readonly contract: AccountId32;
      readonly data: Bytes;
    } & Struct;
    readonly isCodeRemoved: boolean;
    readonly asCodeRemoved: {
      readonly codeHash: H256;
      readonly depositReleased: u128;
      readonly remover: AccountId32;
    } & Struct;
    readonly isContractCodeUpdated: boolean;
    readonly asContractCodeUpdated: {
      readonly contract: AccountId32;
      readonly newCodeHash: H256;
      readonly oldCodeHash: H256;
    } & Struct;
    readonly isCalled: boolean;
    readonly asCalled: {
      readonly caller: PalletContractsOrigin;
      readonly contract: AccountId32;
    } & Struct;
    readonly isDelegateCalled: boolean;
    readonly asDelegateCalled: {
      readonly contract: AccountId32;
      readonly codeHash: H256;
    } & Struct;
    readonly isStorageDepositTransferredAndHeld: boolean;
    readonly asStorageDepositTransferredAndHeld: {
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isStorageDepositTransferredAndReleased: boolean;
    readonly asStorageDepositTransferredAndReleased: {
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'Instantiated' | 'Terminated' | 'CodeStored' | 'ContractEmitted' | 'CodeRemoved' | 'ContractCodeUpdated' | 'Called' | 'DelegateCalled' | 'StorageDepositTransferredAndHeld' | 'StorageDepositTransferredAndReleased';
  }

  /** @name PalletContractsOrigin (74) */
  interface PalletContractsOrigin extends Enum {
    readonly isRoot: boolean;
    readonly isSigned: boolean;
    readonly asSigned: AccountId32;
    readonly type: 'Root' | 'Signed';
  }

  /** @name KitchensinkRuntimeRuntime (75) */
  type KitchensinkRuntimeRuntime = Null;

  /** @name PalletSudoEvent (76) */
  interface PalletSudoEvent extends Enum {
    readonly isSudid: boolean;
    readonly asSudid: {
      readonly sudoResult: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isKeyChanged: boolean;
    readonly asKeyChanged: {
      readonly old: Option<AccountId32>;
      readonly new_: AccountId32;
    } & Struct;
    readonly isKeyRemoved: boolean;
    readonly isSudoAsDone: boolean;
    readonly asSudoAsDone: {
      readonly sudoResult: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly type: 'Sudid' | 'KeyChanged' | 'KeyRemoved' | 'SudoAsDone';
  }

  /** @name PalletImOnlineEvent (77) */
  interface PalletImOnlineEvent extends Enum {
    readonly isHeartbeatReceived: boolean;
    readonly asHeartbeatReceived: {
      readonly authorityId: PalletImOnlineSr25519AppSr25519Public;
    } & Struct;
    readonly isAllGood: boolean;
    readonly isSomeOffline: boolean;
    readonly asSomeOffline: {
      readonly offline: Vec<ITuple<[AccountId32, Null]>>;
    } & Struct;
    readonly type: 'HeartbeatReceived' | 'AllGood' | 'SomeOffline';
  }

  /** @name PalletImOnlineSr25519AppSr25519Public (78) */
  interface PalletImOnlineSr25519AppSr25519Public extends U8aFixed {}

  /** @name PalletOffencesEvent (81) */
  interface PalletOffencesEvent extends Enum {
    readonly isOffence: boolean;
    readonly asOffence: {
      readonly kind: U8aFixed;
      readonly timeslot: Bytes;
    } & Struct;
    readonly type: 'Offence';
  }

  /** @name PalletIdentityEvent (83) */
  interface PalletIdentityEvent extends Enum {
    readonly isIdentitySet: boolean;
    readonly asIdentitySet: {
      readonly who: AccountId32;
    } & Struct;
    readonly isIdentityCleared: boolean;
    readonly asIdentityCleared: {
      readonly who: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isIdentityKilled: boolean;
    readonly asIdentityKilled: {
      readonly who: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isJudgementRequested: boolean;
    readonly asJudgementRequested: {
      readonly who: AccountId32;
      readonly registrarIndex: u32;
    } & Struct;
    readonly isJudgementUnrequested: boolean;
    readonly asJudgementUnrequested: {
      readonly who: AccountId32;
      readonly registrarIndex: u32;
    } & Struct;
    readonly isJudgementGiven: boolean;
    readonly asJudgementGiven: {
      readonly target: AccountId32;
      readonly registrarIndex: u32;
    } & Struct;
    readonly isRegistrarAdded: boolean;
    readonly asRegistrarAdded: {
      readonly registrarIndex: u32;
    } & Struct;
    readonly isSubIdentityAdded: boolean;
    readonly asSubIdentityAdded: {
      readonly sub: AccountId32;
      readonly main: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isSubIdentitiesSet: boolean;
    readonly asSubIdentitiesSet: {
      readonly main: AccountId32;
      readonly numberOfSubs: u32;
      readonly newDeposit: u128;
    } & Struct;
    readonly isSubIdentityRenamed: boolean;
    readonly asSubIdentityRenamed: {
      readonly sub: AccountId32;
      readonly main: AccountId32;
    } & Struct;
    readonly isSubIdentityRemoved: boolean;
    readonly asSubIdentityRemoved: {
      readonly sub: AccountId32;
      readonly main: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isSubIdentityRevoked: boolean;
    readonly asSubIdentityRevoked: {
      readonly sub: AccountId32;
      readonly main: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isAuthorityAdded: boolean;
    readonly asAuthorityAdded: {
      readonly authority: AccountId32;
    } & Struct;
    readonly isAuthorityRemoved: boolean;
    readonly asAuthorityRemoved: {
      readonly authority: AccountId32;
    } & Struct;
    readonly isUsernameSet: boolean;
    readonly asUsernameSet: {
      readonly who: AccountId32;
      readonly username: Bytes;
    } & Struct;
    readonly isUsernameQueued: boolean;
    readonly asUsernameQueued: {
      readonly who: AccountId32;
      readonly username: Bytes;
      readonly expiration: u32;
    } & Struct;
    readonly isPreapprovalExpired: boolean;
    readonly asPreapprovalExpired: {
      readonly whose: AccountId32;
    } & Struct;
    readonly isPrimaryUsernameSet: boolean;
    readonly asPrimaryUsernameSet: {
      readonly who: AccountId32;
      readonly username: Bytes;
    } & Struct;
    readonly isDanglingUsernameRemoved: boolean;
    readonly asDanglingUsernameRemoved: {
      readonly who: AccountId32;
      readonly username: Bytes;
    } & Struct;
    readonly isUsernameUnbound: boolean;
    readonly asUsernameUnbound: {
      readonly username: Bytes;
    } & Struct;
    readonly isUsernameRemoved: boolean;
    readonly asUsernameRemoved: {
      readonly username: Bytes;
    } & Struct;
    readonly isUsernameKilled: boolean;
    readonly asUsernameKilled: {
      readonly username: Bytes;
    } & Struct;
    readonly type: 'IdentitySet' | 'IdentityCleared' | 'IdentityKilled' | 'JudgementRequested' | 'JudgementUnrequested' | 'JudgementGiven' | 'RegistrarAdded' | 'SubIdentityAdded' | 'SubIdentitiesSet' | 'SubIdentityRenamed' | 'SubIdentityRemoved' | 'SubIdentityRevoked' | 'AuthorityAdded' | 'AuthorityRemoved' | 'UsernameSet' | 'UsernameQueued' | 'PreapprovalExpired' | 'PrimaryUsernameSet' | 'DanglingUsernameRemoved' | 'UsernameUnbound' | 'UsernameRemoved' | 'UsernameKilled';
  }

  /** @name PalletSocietyEvent (85) */
  interface PalletSocietyEvent extends Enum {
    readonly isFounded: boolean;
    readonly asFounded: {
      readonly founder: AccountId32;
    } & Struct;
    readonly isBid: boolean;
    readonly asBid: {
      readonly candidateId: AccountId32;
      readonly offer: u128;
    } & Struct;
    readonly isVouch: boolean;
    readonly asVouch: {
      readonly candidateId: AccountId32;
      readonly offer: u128;
      readonly vouching: AccountId32;
    } & Struct;
    readonly isAutoUnbid: boolean;
    readonly asAutoUnbid: {
      readonly candidate: AccountId32;
    } & Struct;
    readonly isUnbid: boolean;
    readonly asUnbid: {
      readonly candidate: AccountId32;
    } & Struct;
    readonly isUnvouch: boolean;
    readonly asUnvouch: {
      readonly candidate: AccountId32;
    } & Struct;
    readonly isInducted: boolean;
    readonly asInducted: {
      readonly primary: AccountId32;
      readonly candidates: Vec<AccountId32>;
    } & Struct;
    readonly isSuspendedMemberJudgement: boolean;
    readonly asSuspendedMemberJudgement: {
      readonly who: AccountId32;
      readonly judged: bool;
    } & Struct;
    readonly isCandidateSuspended: boolean;
    readonly asCandidateSuspended: {
      readonly candidate: AccountId32;
    } & Struct;
    readonly isMemberSuspended: boolean;
    readonly asMemberSuspended: {
      readonly member: AccountId32;
    } & Struct;
    readonly isChallenged: boolean;
    readonly asChallenged: {
      readonly member: AccountId32;
    } & Struct;
    readonly isVote: boolean;
    readonly asVote: {
      readonly candidate: AccountId32;
      readonly voter: AccountId32;
      readonly vote: bool;
    } & Struct;
    readonly isDefenderVote: boolean;
    readonly asDefenderVote: {
      readonly voter: AccountId32;
      readonly vote: bool;
    } & Struct;
    readonly isNewParams: boolean;
    readonly asNewParams: {
      readonly params: PalletSocietyGroupParams;
    } & Struct;
    readonly isUnfounded: boolean;
    readonly asUnfounded: {
      readonly founder: AccountId32;
    } & Struct;
    readonly isDeposit: boolean;
    readonly asDeposit: {
      readonly value: u128;
    } & Struct;
    readonly isElevated: boolean;
    readonly asElevated: {
      readonly member: AccountId32;
      readonly rank: u32;
    } & Struct;
    readonly type: 'Founded' | 'Bid' | 'Vouch' | 'AutoUnbid' | 'Unbid' | 'Unvouch' | 'Inducted' | 'SuspendedMemberJudgement' | 'CandidateSuspended' | 'MemberSuspended' | 'Challenged' | 'Vote' | 'DefenderVote' | 'NewParams' | 'Unfounded' | 'Deposit' | 'Elevated';
  }

  /** @name PalletSocietyGroupParams (87) */
  interface PalletSocietyGroupParams extends Struct {
    readonly maxMembers: u32;
    readonly maxIntake: u32;
    readonly maxStrikes: u32;
    readonly candidateDeposit: u128;
  }

  /** @name PalletRecoveryEvent (88) */
  interface PalletRecoveryEvent extends Enum {
    readonly isRecoveryCreated: boolean;
    readonly asRecoveryCreated: {
      readonly account: AccountId32;
    } & Struct;
    readonly isRecoveryInitiated: boolean;
    readonly asRecoveryInitiated: {
      readonly lostAccount: AccountId32;
      readonly rescuerAccount: AccountId32;
    } & Struct;
    readonly isRecoveryVouched: boolean;
    readonly asRecoveryVouched: {
      readonly lostAccount: AccountId32;
      readonly rescuerAccount: AccountId32;
      readonly sender: AccountId32;
    } & Struct;
    readonly isRecoveryClosed: boolean;
    readonly asRecoveryClosed: {
      readonly lostAccount: AccountId32;
      readonly rescuerAccount: AccountId32;
    } & Struct;
    readonly isAccountRecovered: boolean;
    readonly asAccountRecovered: {
      readonly lostAccount: AccountId32;
      readonly rescuerAccount: AccountId32;
    } & Struct;
    readonly isRecoveryRemoved: boolean;
    readonly asRecoveryRemoved: {
      readonly lostAccount: AccountId32;
    } & Struct;
    readonly type: 'RecoveryCreated' | 'RecoveryInitiated' | 'RecoveryVouched' | 'RecoveryClosed' | 'AccountRecovered' | 'RecoveryRemoved';
  }

  /** @name PalletVestingEvent (89) */
  interface PalletVestingEvent extends Enum {
    readonly isVestingUpdated: boolean;
    readonly asVestingUpdated: {
      readonly account: AccountId32;
      readonly unvested: u128;
    } & Struct;
    readonly isVestingCompleted: boolean;
    readonly asVestingCompleted: {
      readonly account: AccountId32;
    } & Struct;
    readonly type: 'VestingUpdated' | 'VestingCompleted';
  }

  /** @name PalletSchedulerEvent (90) */
  interface PalletSchedulerEvent extends Enum {
    readonly isScheduled: boolean;
    readonly asScheduled: {
      readonly when: u32;
      readonly index: u32;
    } & Struct;
    readonly isCanceled: boolean;
    readonly asCanceled: {
      readonly when: u32;
      readonly index: u32;
    } & Struct;
    readonly isDispatched: boolean;
    readonly asDispatched: {
      readonly task: ITuple<[u32, u32]>;
      readonly id: Option<U8aFixed>;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isRetrySet: boolean;
    readonly asRetrySet: {
      readonly task: ITuple<[u32, u32]>;
      readonly id: Option<U8aFixed>;
      readonly period: u32;
      readonly retries: u8;
    } & Struct;
    readonly isRetryCancelled: boolean;
    readonly asRetryCancelled: {
      readonly task: ITuple<[u32, u32]>;
      readonly id: Option<U8aFixed>;
    } & Struct;
    readonly isCallUnavailable: boolean;
    readonly asCallUnavailable: {
      readonly task: ITuple<[u32, u32]>;
      readonly id: Option<U8aFixed>;
    } & Struct;
    readonly isPeriodicFailed: boolean;
    readonly asPeriodicFailed: {
      readonly task: ITuple<[u32, u32]>;
      readonly id: Option<U8aFixed>;
    } & Struct;
    readonly isRetryFailed: boolean;
    readonly asRetryFailed: {
      readonly task: ITuple<[u32, u32]>;
      readonly id: Option<U8aFixed>;
    } & Struct;
    readonly isPermanentlyOverweight: boolean;
    readonly asPermanentlyOverweight: {
      readonly task: ITuple<[u32, u32]>;
      readonly id: Option<U8aFixed>;
    } & Struct;
    readonly isAgendaIncomplete: boolean;
    readonly asAgendaIncomplete: {
      readonly when: u32;
    } & Struct;
    readonly type: 'Scheduled' | 'Canceled' | 'Dispatched' | 'RetrySet' | 'RetryCancelled' | 'CallUnavailable' | 'PeriodicFailed' | 'RetryFailed' | 'PermanentlyOverweight' | 'AgendaIncomplete';
  }

  /** @name PalletGluttonEvent (93) */
  interface PalletGluttonEvent extends Enum {
    readonly isPalletInitialized: boolean;
    readonly asPalletInitialized: {
      readonly reinit: bool;
    } & Struct;
    readonly isComputationLimitSet: boolean;
    readonly asComputationLimitSet: {
      readonly compute: u64;
    } & Struct;
    readonly isStorageLimitSet: boolean;
    readonly asStorageLimitSet: {
      readonly storage: u64;
    } & Struct;
    readonly isBlockLengthLimitSet: boolean;
    readonly asBlockLengthLimitSet: {
      readonly blockLength: u64;
    } & Struct;
    readonly type: 'PalletInitialized' | 'ComputationLimitSet' | 'StorageLimitSet' | 'BlockLengthLimitSet';
  }

  /** @name PalletPreimageEvent (95) */
  interface PalletPreimageEvent extends Enum {
    readonly isNoted: boolean;
    readonly asNoted: {
      readonly hash_: H256;
    } & Struct;
    readonly isRequested: boolean;
    readonly asRequested: {
      readonly hash_: H256;
    } & Struct;
    readonly isCleared: boolean;
    readonly asCleared: {
      readonly hash_: H256;
    } & Struct;
    readonly type: 'Noted' | 'Requested' | 'Cleared';
  }

  /** @name PalletProxyEvent (96) */
  interface PalletProxyEvent extends Enum {
    readonly isProxyExecuted: boolean;
    readonly asProxyExecuted: {
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isPureCreated: boolean;
    readonly asPureCreated: {
      readonly pure: AccountId32;
      readonly who: AccountId32;
      readonly proxyType: KitchensinkRuntimeProxyType;
      readonly disambiguationIndex: u16;
    } & Struct;
    readonly isAnnounced: boolean;
    readonly asAnnounced: {
      readonly real: AccountId32;
      readonly proxy: AccountId32;
      readonly callHash: H256;
    } & Struct;
    readonly isProxyAdded: boolean;
    readonly asProxyAdded: {
      readonly delegator: AccountId32;
      readonly delegatee: AccountId32;
      readonly proxyType: KitchensinkRuntimeProxyType;
      readonly delay: u32;
    } & Struct;
    readonly isProxyRemoved: boolean;
    readonly asProxyRemoved: {
      readonly delegator: AccountId32;
      readonly delegatee: AccountId32;
      readonly proxyType: KitchensinkRuntimeProxyType;
      readonly delay: u32;
    } & Struct;
    readonly isDepositPoked: boolean;
    readonly asDepositPoked: {
      readonly who: AccountId32;
      readonly kind: PalletProxyDepositKind;
      readonly oldDeposit: u128;
      readonly newDeposit: u128;
    } & Struct;
    readonly type: 'ProxyExecuted' | 'PureCreated' | 'Announced' | 'ProxyAdded' | 'ProxyRemoved' | 'DepositPoked';
  }

  /** @name KitchensinkRuntimeProxyType (97) */
  interface KitchensinkRuntimeProxyType extends Enum {
    readonly isAny: boolean;
    readonly isNonTransfer: boolean;
    readonly isGovernance: boolean;
    readonly isStaking: boolean;
    readonly type: 'Any' | 'NonTransfer' | 'Governance' | 'Staking';
  }

  /** @name PalletProxyDepositKind (99) */
  interface PalletProxyDepositKind extends Enum {
    readonly isProxies: boolean;
    readonly isAnnouncements: boolean;
    readonly type: 'Proxies' | 'Announcements';
  }

  /** @name PalletMultisigEvent (100) */
  interface PalletMultisigEvent extends Enum {
    readonly isNewMultisig: boolean;
    readonly asNewMultisig: {
      readonly approving: AccountId32;
      readonly multisig: AccountId32;
      readonly callHash: U8aFixed;
    } & Struct;
    readonly isMultisigApproval: boolean;
    readonly asMultisigApproval: {
      readonly approving: AccountId32;
      readonly timepoint: PalletMultisigTimepoint;
      readonly multisig: AccountId32;
      readonly callHash: U8aFixed;
    } & Struct;
    readonly isMultisigExecuted: boolean;
    readonly asMultisigExecuted: {
      readonly approving: AccountId32;
      readonly timepoint: PalletMultisigTimepoint;
      readonly multisig: AccountId32;
      readonly callHash: U8aFixed;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isMultisigCancelled: boolean;
    readonly asMultisigCancelled: {
      readonly cancelling: AccountId32;
      readonly timepoint: PalletMultisigTimepoint;
      readonly multisig: AccountId32;
      readonly callHash: U8aFixed;
    } & Struct;
    readonly isDepositPoked: boolean;
    readonly asDepositPoked: {
      readonly who: AccountId32;
      readonly callHash: U8aFixed;
      readonly oldDeposit: u128;
      readonly newDeposit: u128;
    } & Struct;
    readonly type: 'NewMultisig' | 'MultisigApproval' | 'MultisigExecuted' | 'MultisigCancelled' | 'DepositPoked';
  }

  /** @name PalletMultisigTimepoint (101) */
  interface PalletMultisigTimepoint extends Struct {
    readonly height: u32;
    readonly index: u32;
  }

  /** @name PalletBountiesEvent (102) */
  interface PalletBountiesEvent extends Enum {
    readonly isBountyProposed: boolean;
    readonly asBountyProposed: {
      readonly index: u32;
    } & Struct;
    readonly isBountyRejected: boolean;
    readonly asBountyRejected: {
      readonly index: u32;
      readonly bond: u128;
    } & Struct;
    readonly isBountyBecameActive: boolean;
    readonly asBountyBecameActive: {
      readonly index: u32;
    } & Struct;
    readonly isBountyAwarded: boolean;
    readonly asBountyAwarded: {
      readonly index: u32;
      readonly beneficiary: AccountId32;
    } & Struct;
    readonly isBountyClaimed: boolean;
    readonly asBountyClaimed: {
      readonly index: u32;
      readonly payout: u128;
      readonly beneficiary: AccountId32;
    } & Struct;
    readonly isBountyCanceled: boolean;
    readonly asBountyCanceled: {
      readonly index: u32;
    } & Struct;
    readonly isBountyExtended: boolean;
    readonly asBountyExtended: {
      readonly index: u32;
    } & Struct;
    readonly isBountyApproved: boolean;
    readonly asBountyApproved: {
      readonly index: u32;
    } & Struct;
    readonly isCuratorProposed: boolean;
    readonly asCuratorProposed: {
      readonly bountyId: u32;
      readonly curator: AccountId32;
    } & Struct;
    readonly isCuratorUnassigned: boolean;
    readonly asCuratorUnassigned: {
      readonly bountyId: u32;
    } & Struct;
    readonly isCuratorAccepted: boolean;
    readonly asCuratorAccepted: {
      readonly bountyId: u32;
      readonly curator: AccountId32;
    } & Struct;
    readonly type: 'BountyProposed' | 'BountyRejected' | 'BountyBecameActive' | 'BountyAwarded' | 'BountyClaimed' | 'BountyCanceled' | 'BountyExtended' | 'BountyApproved' | 'CuratorProposed' | 'CuratorUnassigned' | 'CuratorAccepted';
  }

  /** @name PalletTipsEvent (103) */
  interface PalletTipsEvent extends Enum {
    readonly isNewTip: boolean;
    readonly asNewTip: {
      readonly tipHash: H256;
    } & Struct;
    readonly isTipClosing: boolean;
    readonly asTipClosing: {
      readonly tipHash: H256;
    } & Struct;
    readonly isTipClosed: boolean;
    readonly asTipClosed: {
      readonly tipHash: H256;
      readonly who: AccountId32;
      readonly payout: u128;
    } & Struct;
    readonly isTipRetracted: boolean;
    readonly asTipRetracted: {
      readonly tipHash: H256;
    } & Struct;
    readonly isTipSlashed: boolean;
    readonly asTipSlashed: {
      readonly tipHash: H256;
      readonly finder: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly type: 'NewTip' | 'TipClosing' | 'TipClosed' | 'TipRetracted' | 'TipSlashed';
  }

  /** @name PalletAssetsEvent (104) */
  interface PalletAssetsEvent extends Enum {
    readonly isCreated: boolean;
    readonly asCreated: {
      readonly assetId: u32;
      readonly creator: AccountId32;
      readonly owner: AccountId32;
    } & Struct;
    readonly isIssued: boolean;
    readonly asIssued: {
      readonly assetId: u32;
      readonly owner: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isTransferred: boolean;
    readonly asTransferred: {
      readonly assetId: u32;
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isBurned: boolean;
    readonly asBurned: {
      readonly assetId: u32;
      readonly owner: AccountId32;
      readonly balance: u128;
    } & Struct;
    readonly isTeamChanged: boolean;
    readonly asTeamChanged: {
      readonly assetId: u32;
      readonly issuer: AccountId32;
      readonly admin: AccountId32;
      readonly freezer: AccountId32;
    } & Struct;
    readonly isOwnerChanged: boolean;
    readonly asOwnerChanged: {
      readonly assetId: u32;
      readonly owner: AccountId32;
    } & Struct;
    readonly isFrozen: boolean;
    readonly asFrozen: {
      readonly assetId: u32;
      readonly who: AccountId32;
    } & Struct;
    readonly isThawed: boolean;
    readonly asThawed: {
      readonly assetId: u32;
      readonly who: AccountId32;
    } & Struct;
    readonly isAssetFrozen: boolean;
    readonly asAssetFrozen: {
      readonly assetId: u32;
    } & Struct;
    readonly isAssetThawed: boolean;
    readonly asAssetThawed: {
      readonly assetId: u32;
    } & Struct;
    readonly isAccountsDestroyed: boolean;
    readonly asAccountsDestroyed: {
      readonly assetId: u32;
      readonly accountsDestroyed: u32;
      readonly accountsRemaining: u32;
    } & Struct;
    readonly isApprovalsDestroyed: boolean;
    readonly asApprovalsDestroyed: {
      readonly assetId: u32;
      readonly approvalsDestroyed: u32;
      readonly approvalsRemaining: u32;
    } & Struct;
    readonly isDestructionStarted: boolean;
    readonly asDestructionStarted: {
      readonly assetId: u32;
    } & Struct;
    readonly isDestroyed: boolean;
    readonly asDestroyed: {
      readonly assetId: u32;
    } & Struct;
    readonly isForceCreated: boolean;
    readonly asForceCreated: {
      readonly assetId: u32;
      readonly owner: AccountId32;
    } & Struct;
    readonly isMetadataSet: boolean;
    readonly asMetadataSet: {
      readonly assetId: u32;
      readonly name: Bytes;
      readonly symbol: Bytes;
      readonly decimals: u8;
      readonly isFrozen: bool;
    } & Struct;
    readonly isMetadataCleared: boolean;
    readonly asMetadataCleared: {
      readonly assetId: u32;
    } & Struct;
    readonly isApprovedTransfer: boolean;
    readonly asApprovedTransfer: {
      readonly assetId: u32;
      readonly source: AccountId32;
      readonly delegate: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isApprovalCancelled: boolean;
    readonly asApprovalCancelled: {
      readonly assetId: u32;
      readonly owner: AccountId32;
      readonly delegate: AccountId32;
    } & Struct;
    readonly isTransferredApproved: boolean;
    readonly asTransferredApproved: {
      readonly assetId: u32;
      readonly owner: AccountId32;
      readonly delegate: AccountId32;
      readonly destination: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isAssetStatusChanged: boolean;
    readonly asAssetStatusChanged: {
      readonly assetId: u32;
    } & Struct;
    readonly isAssetMinBalanceChanged: boolean;
    readonly asAssetMinBalanceChanged: {
      readonly assetId: u32;
      readonly newMinBalance: u128;
    } & Struct;
    readonly isTouched: boolean;
    readonly asTouched: {
      readonly assetId: u32;
      readonly who: AccountId32;
      readonly depositor: AccountId32;
    } & Struct;
    readonly isBlocked: boolean;
    readonly asBlocked: {
      readonly assetId: u32;
      readonly who: AccountId32;
    } & Struct;
    readonly isDeposited: boolean;
    readonly asDeposited: {
      readonly assetId: u32;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isWithdrawn: boolean;
    readonly asWithdrawn: {
      readonly assetId: u32;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'Created' | 'Issued' | 'Transferred' | 'Burned' | 'TeamChanged' | 'OwnerChanged' | 'Frozen' | 'Thawed' | 'AssetFrozen' | 'AssetThawed' | 'AccountsDestroyed' | 'ApprovalsDestroyed' | 'DestructionStarted' | 'Destroyed' | 'ForceCreated' | 'MetadataSet' | 'MetadataCleared' | 'ApprovedTransfer' | 'ApprovalCancelled' | 'TransferredApproved' | 'AssetStatusChanged' | 'AssetMinBalanceChanged' | 'Touched' | 'Blocked' | 'Deposited' | 'Withdrawn';
  }

  /** @name PalletLotteryEvent (106) */
  interface PalletLotteryEvent extends Enum {
    readonly isLotteryStarted: boolean;
    readonly isCallsUpdated: boolean;
    readonly isWinner: boolean;
    readonly asWinner: {
      readonly winner: AccountId32;
      readonly lotteryBalance: u128;
    } & Struct;
    readonly isTicketBought: boolean;
    readonly asTicketBought: {
      readonly who: AccountId32;
      readonly callIndex: ITuple<[u8, u8]>;
    } & Struct;
    readonly type: 'LotteryStarted' | 'CallsUpdated' | 'Winner' | 'TicketBought';
  }

  /** @name PalletNisEvent (108) */
  interface PalletNisEvent extends Enum {
    readonly isBidPlaced: boolean;
    readonly asBidPlaced: {
      readonly who: AccountId32;
      readonly amount: u128;
      readonly duration: u32;
    } & Struct;
    readonly isBidRetracted: boolean;
    readonly asBidRetracted: {
      readonly who: AccountId32;
      readonly amount: u128;
      readonly duration: u32;
    } & Struct;
    readonly isBidDropped: boolean;
    readonly asBidDropped: {
      readonly who: AccountId32;
      readonly amount: u128;
      readonly duration: u32;
    } & Struct;
    readonly isIssued: boolean;
    readonly asIssued: {
      readonly index: u32;
      readonly expiry: u32;
      readonly who: AccountId32;
      readonly proportion: Perquintill;
      readonly amount: u128;
    } & Struct;
    readonly isThawed: boolean;
    readonly asThawed: {
      readonly index: u32;
      readonly who: AccountId32;
      readonly proportion: Perquintill;
      readonly amount: u128;
      readonly dropped: bool;
    } & Struct;
    readonly isFunded: boolean;
    readonly asFunded: {
      readonly deficit: u128;
    } & Struct;
    readonly isTransferred: boolean;
    readonly asTransferred: {
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly index: u32;
    } & Struct;
    readonly type: 'BidPlaced' | 'BidRetracted' | 'BidDropped' | 'Issued' | 'Thawed' | 'Funded' | 'Transferred';
  }

  /** @name PalletUniquesEvent (110) */
  interface PalletUniquesEvent extends Enum {
    readonly isCreated: boolean;
    readonly asCreated: {
      readonly collection: u32;
      readonly creator: AccountId32;
      readonly owner: AccountId32;
    } & Struct;
    readonly isForceCreated: boolean;
    readonly asForceCreated: {
      readonly collection: u32;
      readonly owner: AccountId32;
    } & Struct;
    readonly isDestroyed: boolean;
    readonly asDestroyed: {
      readonly collection: u32;
    } & Struct;
    readonly isIssued: boolean;
    readonly asIssued: {
      readonly collection: u32;
      readonly item: u32;
      readonly owner: AccountId32;
    } & Struct;
    readonly isTransferred: boolean;
    readonly asTransferred: {
      readonly collection: u32;
      readonly item: u32;
      readonly from: AccountId32;
      readonly to: AccountId32;
    } & Struct;
    readonly isBurned: boolean;
    readonly asBurned: {
      readonly collection: u32;
      readonly item: u32;
      readonly owner: AccountId32;
    } & Struct;
    readonly isFrozen: boolean;
    readonly asFrozen: {
      readonly collection: u32;
      readonly item: u32;
    } & Struct;
    readonly isThawed: boolean;
    readonly asThawed: {
      readonly collection: u32;
      readonly item: u32;
    } & Struct;
    readonly isCollectionFrozen: boolean;
    readonly asCollectionFrozen: {
      readonly collection: u32;
    } & Struct;
    readonly isCollectionThawed: boolean;
    readonly asCollectionThawed: {
      readonly collection: u32;
    } & Struct;
    readonly isOwnerChanged: boolean;
    readonly asOwnerChanged: {
      readonly collection: u32;
      readonly newOwner: AccountId32;
    } & Struct;
    readonly isTeamChanged: boolean;
    readonly asTeamChanged: {
      readonly collection: u32;
      readonly issuer: AccountId32;
      readonly admin: AccountId32;
      readonly freezer: AccountId32;
    } & Struct;
    readonly isApprovedTransfer: boolean;
    readonly asApprovedTransfer: {
      readonly collection: u32;
      readonly item: u32;
      readonly owner: AccountId32;
      readonly delegate: AccountId32;
    } & Struct;
    readonly isApprovalCancelled: boolean;
    readonly asApprovalCancelled: {
      readonly collection: u32;
      readonly item: u32;
      readonly owner: AccountId32;
      readonly delegate: AccountId32;
    } & Struct;
    readonly isItemStatusChanged: boolean;
    readonly asItemStatusChanged: {
      readonly collection: u32;
    } & Struct;
    readonly isCollectionMetadataSet: boolean;
    readonly asCollectionMetadataSet: {
      readonly collection: u32;
      readonly data: Bytes;
      readonly isFrozen: bool;
    } & Struct;
    readonly isCollectionMetadataCleared: boolean;
    readonly asCollectionMetadataCleared: {
      readonly collection: u32;
    } & Struct;
    readonly isMetadataSet: boolean;
    readonly asMetadataSet: {
      readonly collection: u32;
      readonly item: u32;
      readonly data: Bytes;
      readonly isFrozen: bool;
    } & Struct;
    readonly isMetadataCleared: boolean;
    readonly asMetadataCleared: {
      readonly collection: u32;
      readonly item: u32;
    } & Struct;
    readonly isRedeposited: boolean;
    readonly asRedeposited: {
      readonly collection: u32;
      readonly successfulItems: Vec<u32>;
    } & Struct;
    readonly isAttributeSet: boolean;
    readonly asAttributeSet: {
      readonly collection: u32;
      readonly maybeItem: Option<u32>;
      readonly key: Bytes;
      readonly value: Bytes;
    } & Struct;
    readonly isAttributeCleared: boolean;
    readonly asAttributeCleared: {
      readonly collection: u32;
      readonly maybeItem: Option<u32>;
      readonly key: Bytes;
    } & Struct;
    readonly isOwnershipAcceptanceChanged: boolean;
    readonly asOwnershipAcceptanceChanged: {
      readonly who: AccountId32;
      readonly maybeCollection: Option<u32>;
    } & Struct;
    readonly isCollectionMaxSupplySet: boolean;
    readonly asCollectionMaxSupplySet: {
      readonly collection: u32;
      readonly maxSupply: u32;
    } & Struct;
    readonly isItemPriceSet: boolean;
    readonly asItemPriceSet: {
      readonly collection: u32;
      readonly item: u32;
      readonly price: u128;
      readonly whitelistedBuyer: Option<AccountId32>;
    } & Struct;
    readonly isItemPriceRemoved: boolean;
    readonly asItemPriceRemoved: {
      readonly collection: u32;
      readonly item: u32;
    } & Struct;
    readonly isItemBought: boolean;
    readonly asItemBought: {
      readonly collection: u32;
      readonly item: u32;
      readonly price: u128;
      readonly seller: AccountId32;
      readonly buyer: AccountId32;
    } & Struct;
    readonly type: 'Created' | 'ForceCreated' | 'Destroyed' | 'Issued' | 'Transferred' | 'Burned' | 'Frozen' | 'Thawed' | 'CollectionFrozen' | 'CollectionThawed' | 'OwnerChanged' | 'TeamChanged' | 'ApprovedTransfer' | 'ApprovalCancelled' | 'ItemStatusChanged' | 'CollectionMetadataSet' | 'CollectionMetadataCleared' | 'MetadataSet' | 'MetadataCleared' | 'Redeposited' | 'AttributeSet' | 'AttributeCleared' | 'OwnershipAcceptanceChanged' | 'CollectionMaxSupplySet' | 'ItemPriceSet' | 'ItemPriceRemoved' | 'ItemBought';
  }

  /** @name PalletNftsEvent (114) */
  interface PalletNftsEvent extends Enum {
    readonly isCreated: boolean;
    readonly asCreated: {
      readonly collection: u32;
      readonly creator: AccountId32;
      readonly owner: AccountId32;
    } & Struct;
    readonly isForceCreated: boolean;
    readonly asForceCreated: {
      readonly collection: u32;
      readonly owner: AccountId32;
    } & Struct;
    readonly isDestroyed: boolean;
    readonly asDestroyed: {
      readonly collection: u32;
    } & Struct;
    readonly isIssued: boolean;
    readonly asIssued: {
      readonly collection: u32;
      readonly item: u32;
      readonly owner: AccountId32;
    } & Struct;
    readonly isTransferred: boolean;
    readonly asTransferred: {
      readonly collection: u32;
      readonly item: u32;
      readonly from: AccountId32;
      readonly to: AccountId32;
    } & Struct;
    readonly isBurned: boolean;
    readonly asBurned: {
      readonly collection: u32;
      readonly item: u32;
      readonly owner: AccountId32;
    } & Struct;
    readonly isItemTransferLocked: boolean;
    readonly asItemTransferLocked: {
      readonly collection: u32;
      readonly item: u32;
    } & Struct;
    readonly isItemTransferUnlocked: boolean;
    readonly asItemTransferUnlocked: {
      readonly collection: u32;
      readonly item: u32;
    } & Struct;
    readonly isItemPropertiesLocked: boolean;
    readonly asItemPropertiesLocked: {
      readonly collection: u32;
      readonly item: u32;
      readonly lockMetadata: bool;
      readonly lockAttributes: bool;
    } & Struct;
    readonly isCollectionLocked: boolean;
    readonly asCollectionLocked: {
      readonly collection: u32;
    } & Struct;
    readonly isOwnerChanged: boolean;
    readonly asOwnerChanged: {
      readonly collection: u32;
      readonly newOwner: AccountId32;
    } & Struct;
    readonly isTeamChanged: boolean;
    readonly asTeamChanged: {
      readonly collection: u32;
      readonly issuer: Option<AccountId32>;
      readonly admin: Option<AccountId32>;
      readonly freezer: Option<AccountId32>;
    } & Struct;
    readonly isTransferApproved: boolean;
    readonly asTransferApproved: {
      readonly collection: u32;
      readonly item: u32;
      readonly owner: AccountId32;
      readonly delegate: AccountId32;
      readonly deadline: Option<u32>;
    } & Struct;
    readonly isApprovalCancelled: boolean;
    readonly asApprovalCancelled: {
      readonly collection: u32;
      readonly item: u32;
      readonly owner: AccountId32;
      readonly delegate: AccountId32;
    } & Struct;
    readonly isAllApprovalsCancelled: boolean;
    readonly asAllApprovalsCancelled: {
      readonly collection: u32;
      readonly item: u32;
      readonly owner: AccountId32;
    } & Struct;
    readonly isCollectionConfigChanged: boolean;
    readonly asCollectionConfigChanged: {
      readonly collection: u32;
    } & Struct;
    readonly isCollectionMetadataSet: boolean;
    readonly asCollectionMetadataSet: {
      readonly collection: u32;
      readonly data: Bytes;
    } & Struct;
    readonly isCollectionMetadataCleared: boolean;
    readonly asCollectionMetadataCleared: {
      readonly collection: u32;
    } & Struct;
    readonly isItemMetadataSet: boolean;
    readonly asItemMetadataSet: {
      readonly collection: u32;
      readonly item: u32;
      readonly data: Bytes;
    } & Struct;
    readonly isItemMetadataCleared: boolean;
    readonly asItemMetadataCleared: {
      readonly collection: u32;
      readonly item: u32;
    } & Struct;
    readonly isRedeposited: boolean;
    readonly asRedeposited: {
      readonly collection: u32;
      readonly successfulItems: Vec<u32>;
    } & Struct;
    readonly isAttributeSet: boolean;
    readonly asAttributeSet: {
      readonly collection: u32;
      readonly maybeItem: Option<u32>;
      readonly key: Bytes;
      readonly value: Bytes;
      readonly namespace: PalletNftsAttributeNamespace;
    } & Struct;
    readonly isAttributeCleared: boolean;
    readonly asAttributeCleared: {
      readonly collection: u32;
      readonly maybeItem: Option<u32>;
      readonly key: Bytes;
      readonly namespace: PalletNftsAttributeNamespace;
    } & Struct;
    readonly isItemAttributesApprovalAdded: boolean;
    readonly asItemAttributesApprovalAdded: {
      readonly collection: u32;
      readonly item: u32;
      readonly delegate: AccountId32;
    } & Struct;
    readonly isItemAttributesApprovalRemoved: boolean;
    readonly asItemAttributesApprovalRemoved: {
      readonly collection: u32;
      readonly item: u32;
      readonly delegate: AccountId32;
    } & Struct;
    readonly isOwnershipAcceptanceChanged: boolean;
    readonly asOwnershipAcceptanceChanged: {
      readonly who: AccountId32;
      readonly maybeCollection: Option<u32>;
    } & Struct;
    readonly isCollectionMaxSupplySet: boolean;
    readonly asCollectionMaxSupplySet: {
      readonly collection: u32;
      readonly maxSupply: u32;
    } & Struct;
    readonly isCollectionMintSettingsUpdated: boolean;
    readonly asCollectionMintSettingsUpdated: {
      readonly collection: u32;
    } & Struct;
    readonly isNextCollectionIdIncremented: boolean;
    readonly asNextCollectionIdIncremented: {
      readonly nextId: Option<u32>;
    } & Struct;
    readonly isItemPriceSet: boolean;
    readonly asItemPriceSet: {
      readonly collection: u32;
      readonly item: u32;
      readonly price: u128;
      readonly whitelistedBuyer: Option<AccountId32>;
    } & Struct;
    readonly isItemPriceRemoved: boolean;
    readonly asItemPriceRemoved: {
      readonly collection: u32;
      readonly item: u32;
    } & Struct;
    readonly isItemBought: boolean;
    readonly asItemBought: {
      readonly collection: u32;
      readonly item: u32;
      readonly price: u128;
      readonly seller: AccountId32;
      readonly buyer: AccountId32;
    } & Struct;
    readonly isTipSent: boolean;
    readonly asTipSent: {
      readonly collection: u32;
      readonly item: u32;
      readonly sender: AccountId32;
      readonly receiver: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSwapCreated: boolean;
    readonly asSwapCreated: {
      readonly offeredCollection: u32;
      readonly offeredItem: u32;
      readonly desiredCollection: u32;
      readonly desiredItem: Option<u32>;
      readonly price: Option<PalletNftsPriceWithDirection>;
      readonly deadline: u32;
    } & Struct;
    readonly isSwapCancelled: boolean;
    readonly asSwapCancelled: {
      readonly offeredCollection: u32;
      readonly offeredItem: u32;
      readonly desiredCollection: u32;
      readonly desiredItem: Option<u32>;
      readonly price: Option<PalletNftsPriceWithDirection>;
      readonly deadline: u32;
    } & Struct;
    readonly isSwapClaimed: boolean;
    readonly asSwapClaimed: {
      readonly sentCollection: u32;
      readonly sentItem: u32;
      readonly sentItemOwner: AccountId32;
      readonly receivedCollection: u32;
      readonly receivedItem: u32;
      readonly receivedItemOwner: AccountId32;
      readonly price: Option<PalletNftsPriceWithDirection>;
      readonly deadline: u32;
    } & Struct;
    readonly isPreSignedAttributesSet: boolean;
    readonly asPreSignedAttributesSet: {
      readonly collection: u32;
      readonly item: u32;
      readonly namespace: PalletNftsAttributeNamespace;
    } & Struct;
    readonly isPalletAttributeSet: boolean;
    readonly asPalletAttributeSet: {
      readonly collection: u32;
      readonly item: Option<u32>;
      readonly attribute: PalletNftsPalletAttributes;
      readonly value: Bytes;
    } & Struct;
    readonly type: 'Created' | 'ForceCreated' | 'Destroyed' | 'Issued' | 'Transferred' | 'Burned' | 'ItemTransferLocked' | 'ItemTransferUnlocked' | 'ItemPropertiesLocked' | 'CollectionLocked' | 'OwnerChanged' | 'TeamChanged' | 'TransferApproved' | 'ApprovalCancelled' | 'AllApprovalsCancelled' | 'CollectionConfigChanged' | 'CollectionMetadataSet' | 'CollectionMetadataCleared' | 'ItemMetadataSet' | 'ItemMetadataCleared' | 'Redeposited' | 'AttributeSet' | 'AttributeCleared' | 'ItemAttributesApprovalAdded' | 'ItemAttributesApprovalRemoved' | 'OwnershipAcceptanceChanged' | 'CollectionMaxSupplySet' | 'CollectionMintSettingsUpdated' | 'NextCollectionIdIncremented' | 'ItemPriceSet' | 'ItemPriceRemoved' | 'ItemBought' | 'TipSent' | 'SwapCreated' | 'SwapCancelled' | 'SwapClaimed' | 'PreSignedAttributesSet' | 'PalletAttributeSet';
  }

  /** @name PalletNftsAttributeNamespace (116) */
  interface PalletNftsAttributeNamespace extends Enum {
    readonly isPallet: boolean;
    readonly isCollectionOwner: boolean;
    readonly isItemOwner: boolean;
    readonly isAccount: boolean;
    readonly asAccount: AccountId32;
    readonly type: 'Pallet' | 'CollectionOwner' | 'ItemOwner' | 'Account';
  }

  /** @name PalletNftsPriceWithDirection (118) */
  interface PalletNftsPriceWithDirection extends Struct {
    readonly amount: u128;
    readonly direction: PalletNftsPriceDirection;
  }

  /** @name PalletNftsPriceDirection (119) */
  interface PalletNftsPriceDirection extends Enum {
    readonly isSend: boolean;
    readonly isReceive: boolean;
    readonly type: 'Send' | 'Receive';
  }

  /** @name PalletNftsPalletAttributes (120) */
  interface PalletNftsPalletAttributes extends Enum {
    readonly isUsedToClaim: boolean;
    readonly asUsedToClaim: u32;
    readonly isTransferDisabled: boolean;
    readonly type: 'UsedToClaim' | 'TransferDisabled';
  }

  /** @name PalletNftFractionalizationEvent (121) */
  interface PalletNftFractionalizationEvent extends Enum {
    readonly isNftFractionalized: boolean;
    readonly asNftFractionalized: {
      readonly nftCollection: u32;
      readonly nft: u32;
      readonly fractions: u128;
      readonly asset: u32;
      readonly beneficiary: AccountId32;
    } & Struct;
    readonly isNftUnified: boolean;
    readonly asNftUnified: {
      readonly nftCollection: u32;
      readonly nft: u32;
      readonly asset: u32;
      readonly beneficiary: AccountId32;
    } & Struct;
    readonly type: 'NftFractionalized' | 'NftUnified';
  }

  /** @name PalletSalaryEvent (122) */
  interface PalletSalaryEvent extends Enum {
    readonly isInducted: boolean;
    readonly asInducted: {
      readonly who: AccountId32;
    } & Struct;
    readonly isRegistered: boolean;
    readonly asRegistered: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isPaid: boolean;
    readonly asPaid: {
      readonly who: AccountId32;
      readonly beneficiary: AccountId32;
      readonly amount: u128;
      readonly id: Null;
    } & Struct;
    readonly isCycleStarted: boolean;
    readonly asCycleStarted: {
      readonly index: u32;
    } & Struct;
    readonly isSwapped: boolean;
    readonly asSwapped: {
      readonly who: AccountId32;
      readonly newWho: AccountId32;
    } & Struct;
    readonly type: 'Inducted' | 'Registered' | 'Paid' | 'CycleStarted' | 'Swapped';
  }

  /** @name PalletCoreFellowshipEvent (123) */
  interface PalletCoreFellowshipEvent extends Enum {
    readonly isParamsChanged: boolean;
    readonly asParamsChanged: {
      readonly params: PalletCoreFellowshipParamsTypeU128;
    } & Struct;
    readonly isActiveChanged: boolean;
    readonly asActiveChanged: {
      readonly who: AccountId32;
      readonly isActive: bool;
    } & Struct;
    readonly isInducted: boolean;
    readonly asInducted: {
      readonly who: AccountId32;
    } & Struct;
    readonly isOffboarded: boolean;
    readonly asOffboarded: {
      readonly who: AccountId32;
    } & Struct;
    readonly isPromoted: boolean;
    readonly asPromoted: {
      readonly who: AccountId32;
      readonly toRank: u16;
    } & Struct;
    readonly isDemoted: boolean;
    readonly asDemoted: {
      readonly who: AccountId32;
      readonly toRank: u16;
    } & Struct;
    readonly isProven: boolean;
    readonly asProven: {
      readonly who: AccountId32;
      readonly atRank: u16;
    } & Struct;
    readonly isRequested: boolean;
    readonly asRequested: {
      readonly who: AccountId32;
      readonly wish: PalletCoreFellowshipWish;
    } & Struct;
    readonly isEvidenceJudged: boolean;
    readonly asEvidenceJudged: {
      readonly who: AccountId32;
      readonly wish: PalletCoreFellowshipWish;
      readonly evidence: Bytes;
      readonly oldRank: u16;
      readonly newRank: Option<u16>;
    } & Struct;
    readonly isImported: boolean;
    readonly asImported: {
      readonly who: AccountId32;
      readonly rank: u16;
    } & Struct;
    readonly isSwapped: boolean;
    readonly asSwapped: {
      readonly who: AccountId32;
      readonly newWho: AccountId32;
    } & Struct;
    readonly type: 'ParamsChanged' | 'ActiveChanged' | 'Inducted' | 'Offboarded' | 'Promoted' | 'Demoted' | 'Proven' | 'Requested' | 'EvidenceJudged' | 'Imported' | 'Swapped';
  }

  /** @name PalletCoreFellowshipParamsTypeU128 (124) */
  interface PalletCoreFellowshipParamsTypeU128 extends Struct {
    readonly activeSalary: Vec<u128>;
    readonly passiveSalary: Vec<u128>;
    readonly demotionPeriod: Vec<u32>;
    readonly minPromotionPeriod: Vec<u32>;
    readonly offboardTimeout: u32;
  }

  /** @name PalletCoreFellowshipWish (128) */
  interface PalletCoreFellowshipWish extends Enum {
    readonly isRetention: boolean;
    readonly isPromotion: boolean;
    readonly type: 'Retention' | 'Promotion';
  }

  /** @name PalletTransactionStorageEvent (131) */
  interface PalletTransactionStorageEvent extends Enum {
    readonly isStored: boolean;
    readonly asStored: {
      readonly index: u32;
    } & Struct;
    readonly isRenewed: boolean;
    readonly asRenewed: {
      readonly index: u32;
    } & Struct;
    readonly isProofChecked: boolean;
    readonly type: 'Stored' | 'Renewed' | 'ProofChecked';
  }

  /** @name PalletBagsListEvent (132) */
  interface PalletBagsListEvent extends Enum {
    readonly isRebagged: boolean;
    readonly asRebagged: {
      readonly who: AccountId32;
      readonly from: u64;
      readonly to: u64;
    } & Struct;
    readonly isScoreUpdated: boolean;
    readonly asScoreUpdated: {
      readonly who: AccountId32;
      readonly newScore: u64;
    } & Struct;
    readonly type: 'Rebagged' | 'ScoreUpdated';
  }

  /** @name PalletStateTrieMigrationEvent (133) */
  interface PalletStateTrieMigrationEvent extends Enum {
    readonly isMigrated: boolean;
    readonly asMigrated: {
      readonly top: u32;
      readonly child: u32;
      readonly compute: PalletStateTrieMigrationMigrationCompute;
    } & Struct;
    readonly isSlashed: boolean;
    readonly asSlashed: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isAutoMigrationFinished: boolean;
    readonly isHalted: boolean;
    readonly asHalted: {
      readonly error: PalletStateTrieMigrationError;
    } & Struct;
    readonly type: 'Migrated' | 'Slashed' | 'AutoMigrationFinished' | 'Halted';
  }

  /** @name PalletStateTrieMigrationMigrationCompute (134) */
  interface PalletStateTrieMigrationMigrationCompute extends Enum {
    readonly isSigned: boolean;
    readonly isAuto: boolean;
    readonly type: 'Signed' | 'Auto';
  }

  /** @name PalletStateTrieMigrationError (135) */
  interface PalletStateTrieMigrationError extends Enum {
    readonly isMaxSignedLimits: boolean;
    readonly isKeyTooLong: boolean;
    readonly isNotEnoughFunds: boolean;
    readonly isBadWitness: boolean;
    readonly isSignedMigrationNotAllowed: boolean;
    readonly isBadChildRoot: boolean;
    readonly type: 'MaxSignedLimits' | 'KeyTooLong' | 'NotEnoughFunds' | 'BadWitness' | 'SignedMigrationNotAllowed' | 'BadChildRoot';
  }

  /** @name PalletChildBountiesEvent (136) */
  interface PalletChildBountiesEvent extends Enum {
    readonly isAdded: boolean;
    readonly asAdded: {
      readonly index: u32;
      readonly childIndex: u32;
    } & Struct;
    readonly isAwarded: boolean;
    readonly asAwarded: {
      readonly index: u32;
      readonly childIndex: u32;
      readonly beneficiary: AccountId32;
    } & Struct;
    readonly isClaimed: boolean;
    readonly asClaimed: {
      readonly index: u32;
      readonly childIndex: u32;
      readonly payout: u128;
      readonly beneficiary: AccountId32;
    } & Struct;
    readonly isCanceled: boolean;
    readonly asCanceled: {
      readonly index: u32;
      readonly childIndex: u32;
    } & Struct;
    readonly type: 'Added' | 'Awarded' | 'Claimed' | 'Canceled';
  }

  /** @name PalletReferendaEvent (137) */
  interface PalletReferendaEvent extends Enum {
    readonly isSubmitted: boolean;
    readonly asSubmitted: {
      readonly index: u32;
      readonly track: u16;
      readonly proposal: FrameSupportPreimagesBounded;
    } & Struct;
    readonly isDecisionDepositPlaced: boolean;
    readonly asDecisionDepositPlaced: {
      readonly index: u32;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isDecisionDepositRefunded: boolean;
    readonly asDecisionDepositRefunded: {
      readonly index: u32;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isDepositSlashed: boolean;
    readonly asDepositSlashed: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isDecisionStarted: boolean;
    readonly asDecisionStarted: {
      readonly index: u32;
      readonly track: u16;
      readonly proposal: FrameSupportPreimagesBounded;
      readonly tally: PalletConvictionVotingTally;
    } & Struct;
    readonly isConfirmStarted: boolean;
    readonly asConfirmStarted: {
      readonly index: u32;
    } & Struct;
    readonly isConfirmAborted: boolean;
    readonly asConfirmAborted: {
      readonly index: u32;
    } & Struct;
    readonly isConfirmed: boolean;
    readonly asConfirmed: {
      readonly index: u32;
      readonly tally: PalletConvictionVotingTally;
    } & Struct;
    readonly isApproved: boolean;
    readonly asApproved: {
      readonly index: u32;
    } & Struct;
    readonly isRejected: boolean;
    readonly asRejected: {
      readonly index: u32;
      readonly tally: PalletConvictionVotingTally;
    } & Struct;
    readonly isTimedOut: boolean;
    readonly asTimedOut: {
      readonly index: u32;
      readonly tally: PalletConvictionVotingTally;
    } & Struct;
    readonly isCancelled: boolean;
    readonly asCancelled: {
      readonly index: u32;
      readonly tally: PalletConvictionVotingTally;
    } & Struct;
    readonly isKilled: boolean;
    readonly asKilled: {
      readonly index: u32;
      readonly tally: PalletConvictionVotingTally;
    } & Struct;
    readonly isSubmissionDepositRefunded: boolean;
    readonly asSubmissionDepositRefunded: {
      readonly index: u32;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isMetadataSet: boolean;
    readonly asMetadataSet: {
      readonly index: u32;
      readonly hash_: H256;
    } & Struct;
    readonly isMetadataCleared: boolean;
    readonly asMetadataCleared: {
      readonly index: u32;
      readonly hash_: H256;
    } & Struct;
    readonly type: 'Submitted' | 'DecisionDepositPlaced' | 'DecisionDepositRefunded' | 'DepositSlashed' | 'DecisionStarted' | 'ConfirmStarted' | 'ConfirmAborted' | 'Confirmed' | 'Approved' | 'Rejected' | 'TimedOut' | 'Cancelled' | 'Killed' | 'SubmissionDepositRefunded' | 'MetadataSet' | 'MetadataCleared';
  }

  /** @name FrameSupportPreimagesBounded (138) */
  interface FrameSupportPreimagesBounded extends Enum {
    readonly isLegacy: boolean;
    readonly asLegacy: {
      readonly hash_: H256;
    } & Struct;
    readonly isInline: boolean;
    readonly asInline: Bytes;
    readonly isLookup: boolean;
    readonly asLookup: {
      readonly hash_: H256;
      readonly len: u32;
    } & Struct;
    readonly type: 'Legacy' | 'Inline' | 'Lookup';
  }

  /** @name FrameSystemCall (140) */
  interface FrameSystemCall extends Enum {
    readonly isRemark: boolean;
    readonly asRemark: {
      readonly remark: Bytes;
    } & Struct;
    readonly isSetHeapPages: boolean;
    readonly asSetHeapPages: {
      readonly pages: u64;
    } & Struct;
    readonly isSetCode: boolean;
    readonly asSetCode: {
      readonly code: Bytes;
    } & Struct;
    readonly isSetCodeWithoutChecks: boolean;
    readonly asSetCodeWithoutChecks: {
      readonly code: Bytes;
    } & Struct;
    readonly isSetStorage: boolean;
    readonly asSetStorage: {
      readonly items: Vec<ITuple<[Bytes, Bytes]>>;
    } & Struct;
    readonly isKillStorage: boolean;
    readonly asKillStorage: {
      readonly keys_: Vec<Bytes>;
    } & Struct;
    readonly isKillPrefix: boolean;
    readonly asKillPrefix: {
      readonly prefix: Bytes;
      readonly subkeys: u32;
    } & Struct;
    readonly isRemarkWithEvent: boolean;
    readonly asRemarkWithEvent: {
      readonly remark: Bytes;
    } & Struct;
    readonly isAuthorizeUpgrade: boolean;
    readonly asAuthorizeUpgrade: {
      readonly codeHash: H256;
    } & Struct;
    readonly isAuthorizeUpgradeWithoutChecks: boolean;
    readonly asAuthorizeUpgradeWithoutChecks: {
      readonly codeHash: H256;
    } & Struct;
    readonly isApplyAuthorizedUpgrade: boolean;
    readonly asApplyAuthorizedUpgrade: {
      readonly code: Bytes;
    } & Struct;
    readonly type: 'Remark' | 'SetHeapPages' | 'SetCode' | 'SetCodeWithoutChecks' | 'SetStorage' | 'KillStorage' | 'KillPrefix' | 'RemarkWithEvent' | 'AuthorizeUpgrade' | 'AuthorizeUpgradeWithoutChecks' | 'ApplyAuthorizedUpgrade';
  }

  /** @name PalletUtilityCall (144) */
  interface PalletUtilityCall extends Enum {
    readonly isBatch: boolean;
    readonly asBatch: {
      readonly calls: Vec<Call>;
    } & Struct;
    readonly isAsDerivative: boolean;
    readonly asAsDerivative: {
      readonly index: u16;
      readonly call: Call;
    } & Struct;
    readonly isBatchAll: boolean;
    readonly asBatchAll: {
      readonly calls: Vec<Call>;
    } & Struct;
    readonly isDispatchAs: boolean;
    readonly asDispatchAs: {
      readonly asOrigin: KitchensinkRuntimeOriginCaller;
      readonly call: Call;
    } & Struct;
    readonly isForceBatch: boolean;
    readonly asForceBatch: {
      readonly calls: Vec<Call>;
    } & Struct;
    readonly isWithWeight: boolean;
    readonly asWithWeight: {
      readonly call: Call;
      readonly weight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isIfElse: boolean;
    readonly asIfElse: {
      readonly main: Call;
      readonly fallback: Call;
    } & Struct;
    readonly isDispatchAsFallible: boolean;
    readonly asDispatchAsFallible: {
      readonly asOrigin: KitchensinkRuntimeOriginCaller;
      readonly call: Call;
    } & Struct;
    readonly type: 'Batch' | 'AsDerivative' | 'BatchAll' | 'DispatchAs' | 'ForceBatch' | 'WithWeight' | 'IfElse' | 'DispatchAsFallible';
  }

  /** @name KitchensinkRuntimeOriginCaller (146) */
  interface KitchensinkRuntimeOriginCaller extends Enum {
    readonly isSystem: boolean;
    readonly asSystem: FrameSupportDispatchRawOrigin;
    readonly isCouncil: boolean;
    readonly asCouncil: PalletCollectiveRawOrigin;
    readonly isTechnicalCommittee: boolean;
    readonly asTechnicalCommittee: PalletCollectiveRawOrigin;
    readonly isAllianceMotion: boolean;
    readonly asAllianceMotion: PalletCollectiveRawOrigin;
    readonly type: 'System' | 'Council' | 'TechnicalCommittee' | 'AllianceMotion';
  }

  /** @name FrameSupportDispatchRawOrigin (147) */
  interface FrameSupportDispatchRawOrigin extends Enum {
    readonly isRoot: boolean;
    readonly isSigned: boolean;
    readonly asSigned: AccountId32;
    readonly isNone: boolean;
    readonly type: 'Root' | 'Signed' | 'None';
  }

  /** @name PalletCollectiveRawOrigin (148) */
  interface PalletCollectiveRawOrigin extends Enum {
    readonly isMembers: boolean;
    readonly asMembers: ITuple<[u32, u32]>;
    readonly isMember: boolean;
    readonly asMember: AccountId32;
    readonly isPhantom: boolean;
    readonly type: 'Members' | 'Member' | 'Phantom';
  }

  /** @name PalletBabeCall (151) */
  interface PalletBabeCall extends Enum {
    readonly isReportEquivocation: boolean;
    readonly asReportEquivocation: {
      readonly equivocationProof: SpConsensusSlotsEquivocationProof;
      readonly keyOwnerProof: SpSessionMembershipProof;
    } & Struct;
    readonly isReportEquivocationUnsigned: boolean;
    readonly asReportEquivocationUnsigned: {
      readonly equivocationProof: SpConsensusSlotsEquivocationProof;
      readonly keyOwnerProof: SpSessionMembershipProof;
    } & Struct;
    readonly isPlanConfigChange: boolean;
    readonly asPlanConfigChange: {
      readonly config: SpConsensusBabeDigestsNextConfigDescriptor;
    } & Struct;
    readonly type: 'ReportEquivocation' | 'ReportEquivocationUnsigned' | 'PlanConfigChange';
  }

  /** @name SpConsensusSlotsEquivocationProof (152) */
  interface SpConsensusSlotsEquivocationProof extends Struct {
    readonly offender: SpConsensusBabeAppPublic;
    readonly slot: u64;
    readonly firstHeader: SpRuntimeHeader;
    readonly secondHeader: SpRuntimeHeader;
  }

  /** @name SpRuntimeHeader (153) */
  interface SpRuntimeHeader extends Struct {
    readonly parentHash: H256;
    readonly number: Compact<u32>;
    readonly stateRoot: H256;
    readonly extrinsicsRoot: H256;
    readonly digest: SpRuntimeDigest;
  }

  /** @name SpConsensusBabeAppPublic (155) */
  interface SpConsensusBabeAppPublic extends U8aFixed {}

  /** @name SpSessionMembershipProof (157) */
  interface SpSessionMembershipProof extends Struct {
    readonly session: u32;
    readonly trieNodes: Vec<Bytes>;
    readonly validatorCount: u32;
  }

  /** @name SpConsensusBabeDigestsNextConfigDescriptor (158) */
  interface SpConsensusBabeDigestsNextConfigDescriptor extends Enum {
    readonly isV1: boolean;
    readonly asV1: {
      readonly c: ITuple<[u64, u64]>;
      readonly allowedSlots: SpConsensusBabeAllowedSlots;
    } & Struct;
    readonly type: 'V1';
  }

  /** @name SpConsensusBabeAllowedSlots (160) */
  interface SpConsensusBabeAllowedSlots extends Enum {
    readonly isPrimarySlots: boolean;
    readonly isPrimaryAndSecondaryPlainSlots: boolean;
    readonly isPrimaryAndSecondaryVRFSlots: boolean;
    readonly type: 'PrimarySlots' | 'PrimaryAndSecondaryPlainSlots' | 'PrimaryAndSecondaryVRFSlots';
  }

  /** @name PalletTimestampCall (161) */
  interface PalletTimestampCall extends Enum {
    readonly isSet: boolean;
    readonly asSet: {
      readonly now: Compact<u64>;
    } & Struct;
    readonly type: 'Set';
  }

  /** @name PalletIndicesCall (162) */
  interface PalletIndicesCall extends Enum {
    readonly isClaim: boolean;
    readonly asClaim: {
      readonly index: u32;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly new_: MultiAddress;
      readonly index: u32;
    } & Struct;
    readonly isFree: boolean;
    readonly asFree: {
      readonly index: u32;
    } & Struct;
    readonly isForceTransfer: boolean;
    readonly asForceTransfer: {
      readonly new_: MultiAddress;
      readonly index: u32;
      readonly freeze: bool;
    } & Struct;
    readonly isFreeze: boolean;
    readonly asFreeze: {
      readonly index: u32;
    } & Struct;
    readonly isPokeDeposit: boolean;
    readonly asPokeDeposit: {
      readonly index: u32;
    } & Struct;
    readonly type: 'Claim' | 'Transfer' | 'Free' | 'ForceTransfer' | 'Freeze' | 'PokeDeposit';
  }

  /** @name PalletBalancesCall (165) */
  interface PalletBalancesCall extends Enum {
    readonly isTransferAllowDeath: boolean;
    readonly asTransferAllowDeath: {
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isForceTransfer: boolean;
    readonly asForceTransfer: {
      readonly source: MultiAddress;
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isTransferKeepAlive: boolean;
    readonly asTransferKeepAlive: {
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isTransferAll: boolean;
    readonly asTransferAll: {
      readonly dest: MultiAddress;
      readonly keepAlive: bool;
    } & Struct;
    readonly isForceUnreserve: boolean;
    readonly asForceUnreserve: {
      readonly who: MultiAddress;
      readonly amount: u128;
    } & Struct;
    readonly isUpgradeAccounts: boolean;
    readonly asUpgradeAccounts: {
      readonly who: Vec<AccountId32>;
    } & Struct;
    readonly isForceSetBalance: boolean;
    readonly asForceSetBalance: {
      readonly who: MultiAddress;
      readonly newFree: Compact<u128>;
    } & Struct;
    readonly isForceAdjustTotalIssuance: boolean;
    readonly asForceAdjustTotalIssuance: {
      readonly direction: PalletBalancesAdjustmentDirection;
      readonly delta: Compact<u128>;
    } & Struct;
    readonly isBurn: boolean;
    readonly asBurn: {
      readonly value: Compact<u128>;
      readonly keepAlive: bool;
    } & Struct;
    readonly type: 'TransferAllowDeath' | 'ForceTransfer' | 'TransferKeepAlive' | 'TransferAll' | 'ForceUnreserve' | 'UpgradeAccounts' | 'ForceSetBalance' | 'ForceAdjustTotalIssuance' | 'Burn';
  }

  /** @name PalletBalancesAdjustmentDirection (167) */
  interface PalletBalancesAdjustmentDirection extends Enum {
    readonly isIncrease: boolean;
    readonly isDecrease: boolean;
    readonly type: 'Increase' | 'Decrease';
  }

  /** @name PalletElectionProviderMultiPhaseCall (168) */
  interface PalletElectionProviderMultiPhaseCall extends Enum {
    readonly isSubmitUnsigned: boolean;
    readonly asSubmitUnsigned: {
      readonly rawSolution: PalletElectionProviderMultiPhaseRawSolution;
      readonly witness: PalletElectionProviderMultiPhaseSolutionOrSnapshotSize;
    } & Struct;
    readonly isSetMinimumUntrustedScore: boolean;
    readonly asSetMinimumUntrustedScore: {
      readonly maybeNextScore: Option<SpNposElectionsElectionScore>;
    } & Struct;
    readonly isSetEmergencyElectionResult: boolean;
    readonly asSetEmergencyElectionResult: {
      readonly supports: Vec<ITuple<[AccountId32, SpNposElectionsSupport]>>;
    } & Struct;
    readonly isSubmit: boolean;
    readonly asSubmit: {
      readonly rawSolution: PalletElectionProviderMultiPhaseRawSolution;
    } & Struct;
    readonly isGovernanceFallback: boolean;
    readonly asGovernanceFallback: {
      readonly maybeMaxVoters: Option<u32>;
      readonly maybeMaxTargets: Option<u32>;
    } & Struct;
    readonly type: 'SubmitUnsigned' | 'SetMinimumUntrustedScore' | 'SetEmergencyElectionResult' | 'Submit' | 'GovernanceFallback';
  }

  /** @name PalletElectionProviderMultiPhaseRawSolution (169) */
  interface PalletElectionProviderMultiPhaseRawSolution extends Struct {
    readonly solution: KitchensinkRuntimeNposSolution16;
    readonly score: SpNposElectionsElectionScore;
    readonly round: u32;
  }

  /** @name KitchensinkRuntimeNposSolution16 (170) */
  interface KitchensinkRuntimeNposSolution16 extends Struct {
    readonly votes1: Vec<ITuple<[Compact<u32>, Compact<u16>]>>;
    readonly votes2: Vec<ITuple<[Compact<u32>, ITuple<[Compact<u16>, Compact<PerU16>]>, Compact<u16>]>>;
    readonly votes3: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes4: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes5: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes6: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes7: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes8: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes9: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes10: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes11: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes12: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes13: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes14: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes15: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes16: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
  }

  /** @name PalletElectionProviderMultiPhaseSolutionOrSnapshotSize (221) */
  interface PalletElectionProviderMultiPhaseSolutionOrSnapshotSize extends Struct {
    readonly voters: Compact<u32>;
    readonly targets: Compact<u32>;
  }

  /** @name SpNposElectionsSupport (225) */
  interface SpNposElectionsSupport extends Struct {
    readonly total: u128;
    readonly voters: Vec<ITuple<[AccountId32, u128]>>;
  }

  /** @name PalletStakingPalletCall (226) */
  interface PalletStakingPalletCall extends Enum {
    readonly isBond: boolean;
    readonly asBond: {
      readonly value: Compact<u128>;
      readonly payee: PalletStakingRewardDestination;
    } & Struct;
    readonly isBondExtra: boolean;
    readonly asBondExtra: {
      readonly maxAdditional: Compact<u128>;
    } & Struct;
    readonly isUnbond: boolean;
    readonly asUnbond: {
      readonly value: Compact<u128>;
    } & Struct;
    readonly isWithdrawUnbonded: boolean;
    readonly asWithdrawUnbonded: {
      readonly numSlashingSpans: u32;
    } & Struct;
    readonly isValidate: boolean;
    readonly asValidate: {
      readonly prefs: PalletStakingValidatorPrefs;
    } & Struct;
    readonly isNominate: boolean;
    readonly asNominate: {
      readonly targets: Vec<MultiAddress>;
    } & Struct;
    readonly isChill: boolean;
    readonly isSetPayee: boolean;
    readonly asSetPayee: {
      readonly payee: PalletStakingRewardDestination;
    } & Struct;
    readonly isSetController: boolean;
    readonly isSetValidatorCount: boolean;
    readonly asSetValidatorCount: {
      readonly new_: Compact<u32>;
    } & Struct;
    readonly isIncreaseValidatorCount: boolean;
    readonly asIncreaseValidatorCount: {
      readonly additional: Compact<u32>;
    } & Struct;
    readonly isScaleValidatorCount: boolean;
    readonly asScaleValidatorCount: {
      readonly factor: Percent;
    } & Struct;
    readonly isForceNoEras: boolean;
    readonly isForceNewEra: boolean;
    readonly isSetInvulnerables: boolean;
    readonly asSetInvulnerables: {
      readonly invulnerables: Vec<AccountId32>;
    } & Struct;
    readonly isForceUnstake: boolean;
    readonly asForceUnstake: {
      readonly stash: AccountId32;
      readonly numSlashingSpans: u32;
    } & Struct;
    readonly isForceNewEraAlways: boolean;
    readonly isCancelDeferredSlash: boolean;
    readonly asCancelDeferredSlash: {
      readonly era: u32;
      readonly slashIndices: Vec<u32>;
    } & Struct;
    readonly isPayoutStakers: boolean;
    readonly asPayoutStakers: {
      readonly validatorStash: AccountId32;
      readonly era: u32;
    } & Struct;
    readonly isRebond: boolean;
    readonly asRebond: {
      readonly value: Compact<u128>;
    } & Struct;
    readonly isReapStash: boolean;
    readonly asReapStash: {
      readonly stash: AccountId32;
      readonly numSlashingSpans: u32;
    } & Struct;
    readonly isKick: boolean;
    readonly asKick: {
      readonly who: Vec<MultiAddress>;
    } & Struct;
    readonly isSetStakingConfigs: boolean;
    readonly asSetStakingConfigs: {
      readonly minNominatorBond: PalletStakingPalletConfigOpU128;
      readonly minValidatorBond: PalletStakingPalletConfigOpU128;
      readonly maxNominatorCount: PalletStakingPalletConfigOpU32;
      readonly maxValidatorCount: PalletStakingPalletConfigOpU32;
      readonly chillThreshold: PalletStakingPalletConfigOpPercent;
      readonly minCommission: PalletStakingPalletConfigOpPerbill;
      readonly maxStakedRewards: PalletStakingPalletConfigOpPercent;
    } & Struct;
    readonly isChillOther: boolean;
    readonly asChillOther: {
      readonly stash: AccountId32;
    } & Struct;
    readonly isForceApplyMinCommission: boolean;
    readonly asForceApplyMinCommission: {
      readonly validatorStash: AccountId32;
    } & Struct;
    readonly isSetMinCommission: boolean;
    readonly asSetMinCommission: {
      readonly new_: Perbill;
    } & Struct;
    readonly isPayoutStakersByPage: boolean;
    readonly asPayoutStakersByPage: {
      readonly validatorStash: AccountId32;
      readonly era: u32;
      readonly page: u32;
    } & Struct;
    readonly isUpdatePayee: boolean;
    readonly asUpdatePayee: {
      readonly controller: AccountId32;
    } & Struct;
    readonly isDeprecateControllerBatch: boolean;
    readonly asDeprecateControllerBatch: {
      readonly controllers: Vec<AccountId32>;
    } & Struct;
    readonly isRestoreLedger: boolean;
    readonly asRestoreLedger: {
      readonly stash: AccountId32;
      readonly maybeController: Option<AccountId32>;
      readonly maybeTotal: Option<u128>;
      readonly maybeUnlocking: Option<Vec<PalletStakingUnlockChunk>>;
    } & Struct;
    readonly isMigrateCurrency: boolean;
    readonly asMigrateCurrency: {
      readonly stash: AccountId32;
    } & Struct;
    readonly isManualSlash: boolean;
    readonly asManualSlash: {
      readonly validatorStash: AccountId32;
      readonly era: u32;
      readonly slashFraction: Perbill;
    } & Struct;
    readonly type: 'Bond' | 'BondExtra' | 'Unbond' | 'WithdrawUnbonded' | 'Validate' | 'Nominate' | 'Chill' | 'SetPayee' | 'SetController' | 'SetValidatorCount' | 'IncreaseValidatorCount' | 'ScaleValidatorCount' | 'ForceNoEras' | 'ForceNewEra' | 'SetInvulnerables' | 'ForceUnstake' | 'ForceNewEraAlways' | 'CancelDeferredSlash' | 'PayoutStakers' | 'Rebond' | 'ReapStash' | 'Kick' | 'SetStakingConfigs' | 'ChillOther' | 'ForceApplyMinCommission' | 'SetMinCommission' | 'PayoutStakersByPage' | 'UpdatePayee' | 'DeprecateControllerBatch' | 'RestoreLedger' | 'MigrateCurrency' | 'ManualSlash';
  }

  /** @name PalletStakingPalletConfigOpU128 (229) */
  interface PalletStakingPalletConfigOpU128 extends Enum {
    readonly isNoop: boolean;
    readonly isSet: boolean;
    readonly asSet: u128;
    readonly isRemove: boolean;
    readonly type: 'Noop' | 'Set' | 'Remove';
  }

  /** @name PalletStakingPalletConfigOpU32 (230) */
  interface PalletStakingPalletConfigOpU32 extends Enum {
    readonly isNoop: boolean;
    readonly isSet: boolean;
    readonly asSet: u32;
    readonly isRemove: boolean;
    readonly type: 'Noop' | 'Set' | 'Remove';
  }

  /** @name PalletStakingPalletConfigOpPercent (231) */
  interface PalletStakingPalletConfigOpPercent extends Enum {
    readonly isNoop: boolean;
    readonly isSet: boolean;
    readonly asSet: Percent;
    readonly isRemove: boolean;
    readonly type: 'Noop' | 'Set' | 'Remove';
  }

  /** @name PalletStakingPalletConfigOpPerbill (232) */
  interface PalletStakingPalletConfigOpPerbill extends Enum {
    readonly isNoop: boolean;
    readonly isSet: boolean;
    readonly asSet: Perbill;
    readonly isRemove: boolean;
    readonly type: 'Noop' | 'Set' | 'Remove';
  }

  /** @name PalletStakingUnlockChunk (237) */
  interface PalletStakingUnlockChunk extends Struct {
    readonly value: Compact<u128>;
    readonly era: Compact<u32>;
  }

  /** @name PalletSessionCall (239) */
  interface PalletSessionCall extends Enum {
    readonly isSetKeys: boolean;
    readonly asSetKeys: {
      readonly keys_: KitchensinkRuntimeSessionKeys;
      readonly proof: Bytes;
    } & Struct;
    readonly isPurgeKeys: boolean;
    readonly type: 'SetKeys' | 'PurgeKeys';
  }

  /** @name KitchensinkRuntimeSessionKeys (240) */
  interface KitchensinkRuntimeSessionKeys extends Struct {
    readonly grandpa: SpConsensusGrandpaAppPublic;
    readonly babe: SpConsensusBabeAppPublic;
    readonly imOnline: PalletImOnlineSr25519AppSr25519Public;
    readonly authorityDiscovery: SpAuthorityDiscoveryAppPublic;
    readonly mixnet: SpMixnetAppPublic;
    readonly beefy: SpConsensusBeefyEcdsaCryptoPublic;
  }

  /** @name SpAuthorityDiscoveryAppPublic (241) */
  interface SpAuthorityDiscoveryAppPublic extends U8aFixed {}

  /** @name SpMixnetAppPublic (242) */
  interface SpMixnetAppPublic extends U8aFixed {}

  /** @name SpConsensusBeefyEcdsaCryptoPublic (243) */
  interface SpConsensusBeefyEcdsaCryptoPublic extends U8aFixed {}

  /** @name PalletDemocracyCall (245) */
  interface PalletDemocracyCall extends Enum {
    readonly isPropose: boolean;
    readonly asPropose: {
      readonly proposal: FrameSupportPreimagesBounded;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isSecond: boolean;
    readonly asSecond: {
      readonly proposal: Compact<u32>;
    } & Struct;
    readonly isVote: boolean;
    readonly asVote: {
      readonly refIndex: Compact<u32>;
      readonly vote: PalletDemocracyVoteAccountVote;
    } & Struct;
    readonly isEmergencyCancel: boolean;
    readonly asEmergencyCancel: {
      readonly refIndex: u32;
    } & Struct;
    readonly isExternalPropose: boolean;
    readonly asExternalPropose: {
      readonly proposal: FrameSupportPreimagesBounded;
    } & Struct;
    readonly isExternalProposeMajority: boolean;
    readonly asExternalProposeMajority: {
      readonly proposal: FrameSupportPreimagesBounded;
    } & Struct;
    readonly isExternalProposeDefault: boolean;
    readonly asExternalProposeDefault: {
      readonly proposal: FrameSupportPreimagesBounded;
    } & Struct;
    readonly isFastTrack: boolean;
    readonly asFastTrack: {
      readonly proposalHash: H256;
      readonly votingPeriod: u32;
      readonly delay: u32;
    } & Struct;
    readonly isVetoExternal: boolean;
    readonly asVetoExternal: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isCancelReferendum: boolean;
    readonly asCancelReferendum: {
      readonly refIndex: Compact<u32>;
    } & Struct;
    readonly isDelegate: boolean;
    readonly asDelegate: {
      readonly to: MultiAddress;
      readonly conviction: PalletDemocracyConviction;
      readonly balance: u128;
    } & Struct;
    readonly isUndelegate: boolean;
    readonly isClearPublicProposals: boolean;
    readonly isUnlock: boolean;
    readonly asUnlock: {
      readonly target: MultiAddress;
    } & Struct;
    readonly isRemoveVote: boolean;
    readonly asRemoveVote: {
      readonly index: u32;
    } & Struct;
    readonly isRemoveOtherVote: boolean;
    readonly asRemoveOtherVote: {
      readonly target: MultiAddress;
      readonly index: u32;
    } & Struct;
    readonly isBlacklist: boolean;
    readonly asBlacklist: {
      readonly proposalHash: H256;
      readonly maybeRefIndex: Option<u32>;
    } & Struct;
    readonly isCancelProposal: boolean;
    readonly asCancelProposal: {
      readonly propIndex: Compact<u32>;
    } & Struct;
    readonly isSetMetadata: boolean;
    readonly asSetMetadata: {
      readonly owner: PalletDemocracyMetadataOwner;
      readonly maybeHash: Option<H256>;
    } & Struct;
    readonly type: 'Propose' | 'Second' | 'Vote' | 'EmergencyCancel' | 'ExternalPropose' | 'ExternalProposeMajority' | 'ExternalProposeDefault' | 'FastTrack' | 'VetoExternal' | 'CancelReferendum' | 'Delegate' | 'Undelegate' | 'ClearPublicProposals' | 'Unlock' | 'RemoveVote' | 'RemoveOtherVote' | 'Blacklist' | 'CancelProposal' | 'SetMetadata';
  }

  /** @name PalletDemocracyConviction (246) */
  interface PalletDemocracyConviction extends Enum {
    readonly isNone: boolean;
    readonly isLocked1x: boolean;
    readonly isLocked2x: boolean;
    readonly isLocked3x: boolean;
    readonly isLocked4x: boolean;
    readonly isLocked5x: boolean;
    readonly isLocked6x: boolean;
    readonly type: 'None' | 'Locked1x' | 'Locked2x' | 'Locked3x' | 'Locked4x' | 'Locked5x' | 'Locked6x';
  }

  /** @name PalletCollectiveCall (248) */
  interface PalletCollectiveCall extends Enum {
    readonly isSetMembers: boolean;
    readonly asSetMembers: {
      readonly newMembers: Vec<AccountId32>;
      readonly prime: Option<AccountId32>;
      readonly oldCount: u32;
    } & Struct;
    readonly isExecute: boolean;
    readonly asExecute: {
      readonly proposal: Call;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly isPropose: boolean;
    readonly asPropose: {
      readonly threshold: Compact<u32>;
      readonly proposal: Call;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly isVote: boolean;
    readonly asVote: {
      readonly proposal: H256;
      readonly index: Compact<u32>;
      readonly approve: bool;
    } & Struct;
    readonly isDisapproveProposal: boolean;
    readonly asDisapproveProposal: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isClose: boolean;
    readonly asClose: {
      readonly proposalHash: H256;
      readonly index: Compact<u32>;
      readonly proposalWeightBound: SpWeightsWeightV2Weight;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly isKill: boolean;
    readonly asKill: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isReleaseProposalCost: boolean;
    readonly asReleaseProposalCost: {
      readonly proposalHash: H256;
    } & Struct;
    readonly type: 'SetMembers' | 'Execute' | 'Propose' | 'Vote' | 'DisapproveProposal' | 'Close' | 'Kill' | 'ReleaseProposalCost';
  }

  /** @name PalletElectionsPhragmenCall (250) */
  interface PalletElectionsPhragmenCall extends Enum {
    readonly isVote: boolean;
    readonly asVote: {
      readonly votes: Vec<AccountId32>;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isRemoveVoter: boolean;
    readonly isSubmitCandidacy: boolean;
    readonly asSubmitCandidacy: {
      readonly candidateCount: Compact<u32>;
    } & Struct;
    readonly isRenounceCandidacy: boolean;
    readonly asRenounceCandidacy: {
      readonly renouncing: PalletElectionsPhragmenRenouncing;
    } & Struct;
    readonly isRemoveMember: boolean;
    readonly asRemoveMember: {
      readonly who: MultiAddress;
      readonly slashBond: bool;
      readonly rerunElection: bool;
    } & Struct;
    readonly isCleanDefunctVoters: boolean;
    readonly asCleanDefunctVoters: {
      readonly numVoters: u32;
      readonly numDefunct: u32;
    } & Struct;
    readonly type: 'Vote' | 'RemoveVoter' | 'SubmitCandidacy' | 'RenounceCandidacy' | 'RemoveMember' | 'CleanDefunctVoters';
  }

  /** @name PalletElectionsPhragmenRenouncing (251) */
  interface PalletElectionsPhragmenRenouncing extends Enum {
    readonly isMember: boolean;
    readonly isRunnerUp: boolean;
    readonly isCandidate: boolean;
    readonly asCandidate: Compact<u32>;
    readonly type: 'Member' | 'RunnerUp' | 'Candidate';
  }

  /** @name PalletMembershipCall (252) */
  interface PalletMembershipCall extends Enum {
    readonly isAddMember: boolean;
    readonly asAddMember: {
      readonly who: MultiAddress;
    } & Struct;
    readonly isRemoveMember: boolean;
    readonly asRemoveMember: {
      readonly who: MultiAddress;
    } & Struct;
    readonly isSwapMember: boolean;
    readonly asSwapMember: {
      readonly remove: MultiAddress;
      readonly add: MultiAddress;
    } & Struct;
    readonly isResetMembers: boolean;
    readonly asResetMembers: {
      readonly members: Vec<AccountId32>;
    } & Struct;
    readonly isChangeKey: boolean;
    readonly asChangeKey: {
      readonly new_: MultiAddress;
    } & Struct;
    readonly isSetPrime: boolean;
    readonly asSetPrime: {
      readonly who: MultiAddress;
    } & Struct;
    readonly isClearPrime: boolean;
    readonly type: 'AddMember' | 'RemoveMember' | 'SwapMember' | 'ResetMembers' | 'ChangeKey' | 'SetPrime' | 'ClearPrime';
  }

  /** @name PalletGrandpaCall (253) */
  interface PalletGrandpaCall extends Enum {
    readonly isReportEquivocation: boolean;
    readonly asReportEquivocation: {
      readonly equivocationProof: SpConsensusGrandpaEquivocationProof;
      readonly keyOwnerProof: SpSessionMembershipProof;
    } & Struct;
    readonly isReportEquivocationUnsigned: boolean;
    readonly asReportEquivocationUnsigned: {
      readonly equivocationProof: SpConsensusGrandpaEquivocationProof;
      readonly keyOwnerProof: SpSessionMembershipProof;
    } & Struct;
    readonly isNoteStalled: boolean;
    readonly asNoteStalled: {
      readonly delay: u32;
      readonly bestFinalizedBlockNumber: u32;
    } & Struct;
    readonly type: 'ReportEquivocation' | 'ReportEquivocationUnsigned' | 'NoteStalled';
  }

  /** @name SpConsensusGrandpaEquivocationProof (254) */
  interface SpConsensusGrandpaEquivocationProof extends Struct {
    readonly setId: u64;
    readonly equivocation: SpConsensusGrandpaEquivocation;
  }

  /** @name SpConsensusGrandpaEquivocation (255) */
  interface SpConsensusGrandpaEquivocation extends Enum {
    readonly isPrevote: boolean;
    readonly asPrevote: FinalityGrandpaEquivocationPrevote;
    readonly isPrecommit: boolean;
    readonly asPrecommit: FinalityGrandpaEquivocationPrecommit;
    readonly type: 'Prevote' | 'Precommit';
  }

  /** @name FinalityGrandpaEquivocationPrevote (256) */
  interface FinalityGrandpaEquivocationPrevote extends Struct {
    readonly roundNumber: u64;
    readonly identity: SpConsensusGrandpaAppPublic;
    readonly first: ITuple<[FinalityGrandpaPrevote, SpConsensusGrandpaAppSignature]>;
    readonly second: ITuple<[FinalityGrandpaPrevote, SpConsensusGrandpaAppSignature]>;
  }

  /** @name FinalityGrandpaPrevote (257) */
  interface FinalityGrandpaPrevote extends Struct {
    readonly targetHash: H256;
    readonly targetNumber: u32;
  }

  /** @name SpConsensusGrandpaAppSignature (258) */
  interface SpConsensusGrandpaAppSignature extends U8aFixed {}

  /** @name FinalityGrandpaEquivocationPrecommit (261) */
  interface FinalityGrandpaEquivocationPrecommit extends Struct {
    readonly roundNumber: u64;
    readonly identity: SpConsensusGrandpaAppPublic;
    readonly first: ITuple<[FinalityGrandpaPrecommit, SpConsensusGrandpaAppSignature]>;
    readonly second: ITuple<[FinalityGrandpaPrecommit, SpConsensusGrandpaAppSignature]>;
  }

  /** @name FinalityGrandpaPrecommit (262) */
  interface FinalityGrandpaPrecommit extends Struct {
    readonly targetHash: H256;
    readonly targetNumber: u32;
  }

  /** @name PalletTreasuryCall (264) */
  interface PalletTreasuryCall extends Enum {
    readonly isSpendLocal: boolean;
    readonly asSpendLocal: {
      readonly amount: Compact<u128>;
      readonly beneficiary: MultiAddress;
    } & Struct;
    readonly isRemoveApproval: boolean;
    readonly asRemoveApproval: {
      readonly proposalId: Compact<u32>;
    } & Struct;
    readonly isSpend: boolean;
    readonly asSpend: {
      readonly assetKind: FrameSupportTokensFungibleUnionOfNativeOrWithId;
      readonly amount: Compact<u128>;
      readonly beneficiary: MultiAddress;
      readonly validFrom: Option<u32>;
    } & Struct;
    readonly isPayout: boolean;
    readonly asPayout: {
      readonly index: u32;
    } & Struct;
    readonly isCheckStatus: boolean;
    readonly asCheckStatus: {
      readonly index: u32;
    } & Struct;
    readonly isVoidSpend: boolean;
    readonly asVoidSpend: {
      readonly index: u32;
    } & Struct;
    readonly type: 'SpendLocal' | 'RemoveApproval' | 'Spend' | 'Payout' | 'CheckStatus' | 'VoidSpend';
  }

  /** @name PalletAssetRateCall (265) */
  interface PalletAssetRateCall extends Enum {
    readonly isCreate: boolean;
    readonly asCreate: {
      readonly assetKind: FrameSupportTokensFungibleUnionOfNativeOrWithId;
      readonly rate: u128;
    } & Struct;
    readonly isUpdate: boolean;
    readonly asUpdate: {
      readonly assetKind: FrameSupportTokensFungibleUnionOfNativeOrWithId;
      readonly rate: u128;
    } & Struct;
    readonly isRemove: boolean;
    readonly asRemove: {
      readonly assetKind: FrameSupportTokensFungibleUnionOfNativeOrWithId;
    } & Struct;
    readonly type: 'Create' | 'Update' | 'Remove';
  }

  /** @name PalletContractsCall (266) */
  interface PalletContractsCall extends Enum {
    readonly isCallOldWeight: boolean;
    readonly asCallOldWeight: {
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
      readonly gasLimit: Compact<u64>;
      readonly storageDepositLimit: Option<Compact<u128>>;
      readonly data: Bytes;
    } & Struct;
    readonly isInstantiateWithCodeOldWeight: boolean;
    readonly asInstantiateWithCodeOldWeight: {
      readonly value: Compact<u128>;
      readonly gasLimit: Compact<u64>;
      readonly storageDepositLimit: Option<Compact<u128>>;
      readonly code: Bytes;
      readonly data: Bytes;
      readonly salt: Bytes;
    } & Struct;
    readonly isInstantiateOldWeight: boolean;
    readonly asInstantiateOldWeight: {
      readonly value: Compact<u128>;
      readonly gasLimit: Compact<u64>;
      readonly storageDepositLimit: Option<Compact<u128>>;
      readonly codeHash: H256;
      readonly data: Bytes;
      readonly salt: Bytes;
    } & Struct;
    readonly isUploadCode: boolean;
    readonly asUploadCode: {
      readonly code: Bytes;
      readonly storageDepositLimit: Option<Compact<u128>>;
      readonly determinism: PalletContractsWasmDeterminism;
    } & Struct;
    readonly isRemoveCode: boolean;
    readonly asRemoveCode: {
      readonly codeHash: H256;
    } & Struct;
    readonly isSetCode: boolean;
    readonly asSetCode: {
      readonly dest: MultiAddress;
      readonly codeHash: H256;
    } & Struct;
    readonly isCall: boolean;
    readonly asCall: {
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
      readonly gasLimit: SpWeightsWeightV2Weight;
      readonly storageDepositLimit: Option<Compact<u128>>;
      readonly data: Bytes;
    } & Struct;
    readonly isInstantiateWithCode: boolean;
    readonly asInstantiateWithCode: {
      readonly value: Compact<u128>;
      readonly gasLimit: SpWeightsWeightV2Weight;
      readonly storageDepositLimit: Option<Compact<u128>>;
      readonly code: Bytes;
      readonly data: Bytes;
      readonly salt: Bytes;
    } & Struct;
    readonly isInstantiate: boolean;
    readonly asInstantiate: {
      readonly value: Compact<u128>;
      readonly gasLimit: SpWeightsWeightV2Weight;
      readonly storageDepositLimit: Option<Compact<u128>>;
      readonly codeHash: H256;
      readonly data: Bytes;
      readonly salt: Bytes;
    } & Struct;
    readonly isMigrate: boolean;
    readonly asMigrate: {
      readonly weightLimit: SpWeightsWeightV2Weight;
    } & Struct;
    readonly type: 'CallOldWeight' | 'InstantiateWithCodeOldWeight' | 'InstantiateOldWeight' | 'UploadCode' | 'RemoveCode' | 'SetCode' | 'Call' | 'InstantiateWithCode' | 'Instantiate' | 'Migrate';
  }

  /** @name PalletContractsWasmDeterminism (268) */
  interface PalletContractsWasmDeterminism extends Enum {
    readonly isEnforced: boolean;
    readonly isRelaxed: boolean;
    readonly type: 'Enforced' | 'Relaxed';
  }

  /** @name PalletSudoCall (269) */
  interface PalletSudoCall extends Enum {
    readonly isSudo: boolean;
    readonly asSudo: {
      readonly call: Call;
    } & Struct;
    readonly isSudoUncheckedWeight: boolean;
    readonly asSudoUncheckedWeight: {
      readonly call: Call;
      readonly weight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isSetKey: boolean;
    readonly asSetKey: {
      readonly new_: MultiAddress;
    } & Struct;
    readonly isSudoAs: boolean;
    readonly asSudoAs: {
      readonly who: MultiAddress;
      readonly call: Call;
    } & Struct;
    readonly isRemoveKey: boolean;
    readonly type: 'Sudo' | 'SudoUncheckedWeight' | 'SetKey' | 'SudoAs' | 'RemoveKey';
  }

  /** @name PalletImOnlineCall (270) */
  interface PalletImOnlineCall extends Enum {
    readonly isHeartbeat: boolean;
    readonly asHeartbeat: {
      readonly heartbeat: PalletImOnlineHeartbeat;
      readonly signature: PalletImOnlineSr25519AppSr25519Signature;
    } & Struct;
    readonly type: 'Heartbeat';
  }

  /** @name PalletImOnlineHeartbeat (271) */
  interface PalletImOnlineHeartbeat extends Struct {
    readonly blockNumber: u32;
    readonly sessionIndex: u32;
    readonly authorityIndex: u32;
    readonly validatorsLen: u32;
  }

  /** @name PalletImOnlineSr25519AppSr25519Signature (272) */
  interface PalletImOnlineSr25519AppSr25519Signature extends U8aFixed {}

  /** @name PalletIdentityCall (273) */
  interface PalletIdentityCall extends Enum {
    readonly isAddRegistrar: boolean;
    readonly asAddRegistrar: {
      readonly account: MultiAddress;
    } & Struct;
    readonly isSetIdentity: boolean;
    readonly asSetIdentity: {
      readonly info: PalletIdentityLegacyIdentityInfo;
    } & Struct;
    readonly isSetSubs: boolean;
    readonly asSetSubs: {
      readonly subs: Vec<ITuple<[AccountId32, Data]>>;
    } & Struct;
    readonly isClearIdentity: boolean;
    readonly isRequestJudgement: boolean;
    readonly asRequestJudgement: {
      readonly regIndex: Compact<u32>;
      readonly maxFee: Compact<u128>;
    } & Struct;
    readonly isCancelRequest: boolean;
    readonly asCancelRequest: {
      readonly regIndex: u32;
    } & Struct;
    readonly isSetFee: boolean;
    readonly asSetFee: {
      readonly index: Compact<u32>;
      readonly fee: Compact<u128>;
    } & Struct;
    readonly isSetAccountId: boolean;
    readonly asSetAccountId: {
      readonly index: Compact<u32>;
      readonly new_: MultiAddress;
    } & Struct;
    readonly isSetFields: boolean;
    readonly asSetFields: {
      readonly index: Compact<u32>;
      readonly fields: u64;
    } & Struct;
    readonly isProvideJudgement: boolean;
    readonly asProvideJudgement: {
      readonly regIndex: Compact<u32>;
      readonly target: MultiAddress;
      readonly judgement: PalletIdentityJudgement;
      readonly identity: H256;
    } & Struct;
    readonly isKillIdentity: boolean;
    readonly asKillIdentity: {
      readonly target: MultiAddress;
    } & Struct;
    readonly isAddSub: boolean;
    readonly asAddSub: {
      readonly sub: MultiAddress;
      readonly data: Data;
    } & Struct;
    readonly isRenameSub: boolean;
    readonly asRenameSub: {
      readonly sub: MultiAddress;
      readonly data: Data;
    } & Struct;
    readonly isRemoveSub: boolean;
    readonly asRemoveSub: {
      readonly sub: MultiAddress;
    } & Struct;
    readonly isQuitSub: boolean;
    readonly isAddUsernameAuthority: boolean;
    readonly asAddUsernameAuthority: {
      readonly authority: MultiAddress;
      readonly suffix: Bytes;
      readonly allocation: u32;
    } & Struct;
    readonly isRemoveUsernameAuthority: boolean;
    readonly asRemoveUsernameAuthority: {
      readonly suffix: Bytes;
      readonly authority: MultiAddress;
    } & Struct;
    readonly isSetUsernameFor: boolean;
    readonly asSetUsernameFor: {
      readonly who: MultiAddress;
      readonly username: Bytes;
      readonly signature: Option<SpRuntimeMultiSignature>;
      readonly useAllocation: bool;
    } & Struct;
    readonly isAcceptUsername: boolean;
    readonly asAcceptUsername: {
      readonly username: Bytes;
    } & Struct;
    readonly isRemoveExpiredApproval: boolean;
    readonly asRemoveExpiredApproval: {
      readonly username: Bytes;
    } & Struct;
    readonly isSetPrimaryUsername: boolean;
    readonly asSetPrimaryUsername: {
      readonly username: Bytes;
    } & Struct;
    readonly isUnbindUsername: boolean;
    readonly asUnbindUsername: {
      readonly username: Bytes;
    } & Struct;
    readonly isRemoveUsername: boolean;
    readonly asRemoveUsername: {
      readonly username: Bytes;
    } & Struct;
    readonly isKillUsername: boolean;
    readonly asKillUsername: {
      readonly username: Bytes;
    } & Struct;
    readonly type: 'AddRegistrar' | 'SetIdentity' | 'SetSubs' | 'ClearIdentity' | 'RequestJudgement' | 'CancelRequest' | 'SetFee' | 'SetAccountId' | 'SetFields' | 'ProvideJudgement' | 'KillIdentity' | 'AddSub' | 'RenameSub' | 'RemoveSub' | 'QuitSub' | 'AddUsernameAuthority' | 'RemoveUsernameAuthority' | 'SetUsernameFor' | 'AcceptUsername' | 'RemoveExpiredApproval' | 'SetPrimaryUsername' | 'UnbindUsername' | 'RemoveUsername' | 'KillUsername';
  }

  /** @name PalletIdentityLegacyIdentityInfo (274) */
  interface PalletIdentityLegacyIdentityInfo extends Struct {
    readonly additional: Vec<ITuple<[Data, Data]>>;
    readonly display: Data;
    readonly legal: Data;
    readonly web: Data;
    readonly riot: Data;
    readonly email: Data;
    readonly pgpFingerprint: Option<U8aFixed>;
    readonly image: Data;
    readonly twitter: Data;
  }

  /** @name PalletIdentityJudgement (311) */
  interface PalletIdentityJudgement extends Enum {
    readonly isUnknown: boolean;
    readonly isFeePaid: boolean;
    readonly asFeePaid: u128;
    readonly isReasonable: boolean;
    readonly isKnownGood: boolean;
    readonly isOutOfDate: boolean;
    readonly isLowQuality: boolean;
    readonly isErroneous: boolean;
    readonly type: 'Unknown' | 'FeePaid' | 'Reasonable' | 'KnownGood' | 'OutOfDate' | 'LowQuality' | 'Erroneous';
  }

  /** @name SpRuntimeMultiSignature (313) */
  interface SpRuntimeMultiSignature extends Enum {
    readonly isEd25519: boolean;
    readonly asEd25519: U8aFixed;
    readonly isSr25519: boolean;
    readonly asSr25519: U8aFixed;
    readonly isEcdsa: boolean;
    readonly asEcdsa: U8aFixed;
    readonly type: 'Ed25519' | 'Sr25519' | 'Ecdsa';
  }

  /** @name PalletSocietyCall (315) */
  interface PalletSocietyCall extends Enum {
    readonly isBid: boolean;
    readonly asBid: {
      readonly value: u128;
    } & Struct;
    readonly isUnbid: boolean;
    readonly isVouch: boolean;
    readonly asVouch: {
      readonly who: MultiAddress;
      readonly value: u128;
      readonly tip: u128;
    } & Struct;
    readonly isUnvouch: boolean;
    readonly isVote: boolean;
    readonly asVote: {
      readonly candidate: MultiAddress;
      readonly approve: bool;
    } & Struct;
    readonly isDefenderVote: boolean;
    readonly asDefenderVote: {
      readonly approve: bool;
    } & Struct;
    readonly isPayout: boolean;
    readonly isWaiveRepay: boolean;
    readonly asWaiveRepay: {
      readonly amount: u128;
    } & Struct;
    readonly isFoundSociety: boolean;
    readonly asFoundSociety: {
      readonly founder: MultiAddress;
      readonly maxMembers: u32;
      readonly maxIntake: u32;
      readonly maxStrikes: u32;
      readonly candidateDeposit: u128;
      readonly rules: Bytes;
    } & Struct;
    readonly isDissolve: boolean;
    readonly isJudgeSuspendedMember: boolean;
    readonly asJudgeSuspendedMember: {
      readonly who: MultiAddress;
      readonly forgive: bool;
    } & Struct;
    readonly isSetParameters: boolean;
    readonly asSetParameters: {
      readonly maxMembers: u32;
      readonly maxIntake: u32;
      readonly maxStrikes: u32;
      readonly candidateDeposit: u128;
    } & Struct;
    readonly isPunishSkeptic: boolean;
    readonly isClaimMembership: boolean;
    readonly isBestowMembership: boolean;
    readonly asBestowMembership: {
      readonly candidate: AccountId32;
    } & Struct;
    readonly isKickCandidate: boolean;
    readonly asKickCandidate: {
      readonly candidate: AccountId32;
    } & Struct;
    readonly isResignCandidacy: boolean;
    readonly isDropCandidate: boolean;
    readonly asDropCandidate: {
      readonly candidate: AccountId32;
    } & Struct;
    readonly isCleanupCandidacy: boolean;
    readonly asCleanupCandidacy: {
      readonly candidate: AccountId32;
      readonly max: u32;
    } & Struct;
    readonly isCleanupChallenge: boolean;
    readonly asCleanupChallenge: {
      readonly challengeRound: u32;
      readonly max: u32;
    } & Struct;
    readonly type: 'Bid' | 'Unbid' | 'Vouch' | 'Unvouch' | 'Vote' | 'DefenderVote' | 'Payout' | 'WaiveRepay' | 'FoundSociety' | 'Dissolve' | 'JudgeSuspendedMember' | 'SetParameters' | 'PunishSkeptic' | 'ClaimMembership' | 'BestowMembership' | 'KickCandidate' | 'ResignCandidacy' | 'DropCandidate' | 'CleanupCandidacy' | 'CleanupChallenge';
  }

  /** @name PalletRecoveryCall (316) */
  interface PalletRecoveryCall extends Enum {
    readonly isAsRecovered: boolean;
    readonly asAsRecovered: {
      readonly account: MultiAddress;
      readonly call: Call;
    } & Struct;
    readonly isSetRecovered: boolean;
    readonly asSetRecovered: {
      readonly lost: MultiAddress;
      readonly rescuer: MultiAddress;
    } & Struct;
    readonly isCreateRecovery: boolean;
    readonly asCreateRecovery: {
      readonly friends: Vec<AccountId32>;
      readonly threshold: u16;
      readonly delayPeriod: u32;
    } & Struct;
    readonly isInitiateRecovery: boolean;
    readonly asInitiateRecovery: {
      readonly account: MultiAddress;
    } & Struct;
    readonly isVouchRecovery: boolean;
    readonly asVouchRecovery: {
      readonly lost: MultiAddress;
      readonly rescuer: MultiAddress;
    } & Struct;
    readonly isClaimRecovery: boolean;
    readonly asClaimRecovery: {
      readonly account: MultiAddress;
    } & Struct;
    readonly isCloseRecovery: boolean;
    readonly asCloseRecovery: {
      readonly rescuer: MultiAddress;
    } & Struct;
    readonly isRemoveRecovery: boolean;
    readonly isCancelRecovered: boolean;
    readonly asCancelRecovered: {
      readonly account: MultiAddress;
    } & Struct;
    readonly type: 'AsRecovered' | 'SetRecovered' | 'CreateRecovery' | 'InitiateRecovery' | 'VouchRecovery' | 'ClaimRecovery' | 'CloseRecovery' | 'RemoveRecovery' | 'CancelRecovered';
  }

  /** @name PalletVestingCall (317) */
  interface PalletVestingCall extends Enum {
    readonly isVest: boolean;
    readonly isVestOther: boolean;
    readonly asVestOther: {
      readonly target: MultiAddress;
    } & Struct;
    readonly isVestedTransfer: boolean;
    readonly asVestedTransfer: {
      readonly target: MultiAddress;
      readonly schedule: PalletVestingVestingInfo;
    } & Struct;
    readonly isForceVestedTransfer: boolean;
    readonly asForceVestedTransfer: {
      readonly source: MultiAddress;
      readonly target: MultiAddress;
      readonly schedule: PalletVestingVestingInfo;
    } & Struct;
    readonly isMergeSchedules: boolean;
    readonly asMergeSchedules: {
      readonly schedule1Index: u32;
      readonly schedule2Index: u32;
    } & Struct;
    readonly isForceRemoveVestingSchedule: boolean;
    readonly asForceRemoveVestingSchedule: {
      readonly target: MultiAddress;
      readonly scheduleIndex: u32;
    } & Struct;
    readonly type: 'Vest' | 'VestOther' | 'VestedTransfer' | 'ForceVestedTransfer' | 'MergeSchedules' | 'ForceRemoveVestingSchedule';
  }

  /** @name PalletVestingVestingInfo (318) */
  interface PalletVestingVestingInfo extends Struct {
    readonly locked: u128;
    readonly perBlock: u128;
    readonly startingBlock: u32;
  }

  /** @name PalletSchedulerCall (319) */
  interface PalletSchedulerCall extends Enum {
    readonly isSchedule: boolean;
    readonly asSchedule: {
      readonly when: u32;
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
      readonly priority: u8;
      readonly call: Call;
    } & Struct;
    readonly isCancel: boolean;
    readonly asCancel: {
      readonly when: u32;
      readonly index: u32;
    } & Struct;
    readonly isScheduleNamed: boolean;
    readonly asScheduleNamed: {
      readonly id: U8aFixed;
      readonly when: u32;
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
      readonly priority: u8;
      readonly call: Call;
    } & Struct;
    readonly isCancelNamed: boolean;
    readonly asCancelNamed: {
      readonly id: U8aFixed;
    } & Struct;
    readonly isScheduleAfter: boolean;
    readonly asScheduleAfter: {
      readonly after: u32;
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
      readonly priority: u8;
      readonly call: Call;
    } & Struct;
    readonly isScheduleNamedAfter: boolean;
    readonly asScheduleNamedAfter: {
      readonly id: U8aFixed;
      readonly after: u32;
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
      readonly priority: u8;
      readonly call: Call;
    } & Struct;
    readonly isSetRetry: boolean;
    readonly asSetRetry: {
      readonly task: ITuple<[u32, u32]>;
      readonly retries: u8;
      readonly period: u32;
    } & Struct;
    readonly isSetRetryNamed: boolean;
    readonly asSetRetryNamed: {
      readonly id: U8aFixed;
      readonly retries: u8;
      readonly period: u32;
    } & Struct;
    readonly isCancelRetry: boolean;
    readonly asCancelRetry: {
      readonly task: ITuple<[u32, u32]>;
    } & Struct;
    readonly isCancelRetryNamed: boolean;
    readonly asCancelRetryNamed: {
      readonly id: U8aFixed;
    } & Struct;
    readonly type: 'Schedule' | 'Cancel' | 'ScheduleNamed' | 'CancelNamed' | 'ScheduleAfter' | 'ScheduleNamedAfter' | 'SetRetry' | 'SetRetryNamed' | 'CancelRetry' | 'CancelRetryNamed';
  }

  /** @name PalletGluttonCall (321) */
  interface PalletGluttonCall extends Enum {
    readonly isInitializePallet: boolean;
    readonly asInitializePallet: {
      readonly newCount: u32;
      readonly witnessCount: Option<u32>;
    } & Struct;
    readonly isSetCompute: boolean;
    readonly asSetCompute: {
      readonly compute: u64;
    } & Struct;
    readonly isSetStorage: boolean;
    readonly asSetStorage: {
      readonly storage: u64;
    } & Struct;
    readonly isBloat: boolean;
    readonly asBloat: {
      readonly garbage: Vec<U8aFixed>;
    } & Struct;
    readonly isSetBlockLength: boolean;
    readonly asSetBlockLength: {
      readonly blockLength: u64;
    } & Struct;
    readonly type: 'InitializePallet' | 'SetCompute' | 'SetStorage' | 'Bloat' | 'SetBlockLength';
  }

  /** @name PalletPreimageCall (324) */
  interface PalletPreimageCall extends Enum {
    readonly isNotePreimage: boolean;
    readonly asNotePreimage: {
      readonly bytes: Bytes;
    } & Struct;
    readonly isUnnotePreimage: boolean;
    readonly asUnnotePreimage: {
      readonly hash_: H256;
    } & Struct;
    readonly isRequestPreimage: boolean;
    readonly asRequestPreimage: {
      readonly hash_: H256;
    } & Struct;
    readonly isUnrequestPreimage: boolean;
    readonly asUnrequestPreimage: {
      readonly hash_: H256;
    } & Struct;
    readonly isEnsureUpdated: boolean;
    readonly asEnsureUpdated: {
      readonly hashes: Vec<H256>;
    } & Struct;
    readonly type: 'NotePreimage' | 'UnnotePreimage' | 'RequestPreimage' | 'UnrequestPreimage' | 'EnsureUpdated';
  }

  /** @name PalletProxyCall (326) */
  interface PalletProxyCall extends Enum {
    readonly isProxy: boolean;
    readonly asProxy: {
      readonly real: MultiAddress;
      readonly forceProxyType: Option<KitchensinkRuntimeProxyType>;
      readonly call: Call;
    } & Struct;
    readonly isAddProxy: boolean;
    readonly asAddProxy: {
      readonly delegate: MultiAddress;
      readonly proxyType: KitchensinkRuntimeProxyType;
      readonly delay: u32;
    } & Struct;
    readonly isRemoveProxy: boolean;
    readonly asRemoveProxy: {
      readonly delegate: MultiAddress;
      readonly proxyType: KitchensinkRuntimeProxyType;
      readonly delay: u32;
    } & Struct;
    readonly isRemoveProxies: boolean;
    readonly isCreatePure: boolean;
    readonly asCreatePure: {
      readonly proxyType: KitchensinkRuntimeProxyType;
      readonly delay: u32;
      readonly index: u16;
    } & Struct;
    readonly isKillPure: boolean;
    readonly asKillPure: {
      readonly spawner: MultiAddress;
      readonly proxyType: KitchensinkRuntimeProxyType;
      readonly index: u16;
      readonly height: Compact<u32>;
      readonly extIndex: Compact<u32>;
    } & Struct;
    readonly isAnnounce: boolean;
    readonly asAnnounce: {
      readonly real: MultiAddress;
      readonly callHash: H256;
    } & Struct;
    readonly isRemoveAnnouncement: boolean;
    readonly asRemoveAnnouncement: {
      readonly real: MultiAddress;
      readonly callHash: H256;
    } & Struct;
    readonly isRejectAnnouncement: boolean;
    readonly asRejectAnnouncement: {
      readonly delegate: MultiAddress;
      readonly callHash: H256;
    } & Struct;
    readonly isProxyAnnounced: boolean;
    readonly asProxyAnnounced: {
      readonly delegate: MultiAddress;
      readonly real: MultiAddress;
      readonly forceProxyType: Option<KitchensinkRuntimeProxyType>;
      readonly call: Call;
    } & Struct;
    readonly isPokeDeposit: boolean;
    readonly type: 'Proxy' | 'AddProxy' | 'RemoveProxy' | 'RemoveProxies' | 'CreatePure' | 'KillPure' | 'Announce' | 'RemoveAnnouncement' | 'RejectAnnouncement' | 'ProxyAnnounced' | 'PokeDeposit';
  }

  /** @name PalletMultisigCall (328) */
  interface PalletMultisigCall extends Enum {
    readonly isAsMultiThreshold1: boolean;
    readonly asAsMultiThreshold1: {
      readonly otherSignatories: Vec<AccountId32>;
      readonly call: Call;
    } & Struct;
    readonly isAsMulti: boolean;
    readonly asAsMulti: {
      readonly threshold: u16;
      readonly otherSignatories: Vec<AccountId32>;
      readonly maybeTimepoint: Option<PalletMultisigTimepoint>;
      readonly call: Call;
      readonly maxWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isApproveAsMulti: boolean;
    readonly asApproveAsMulti: {
      readonly threshold: u16;
      readonly otherSignatories: Vec<AccountId32>;
      readonly maybeTimepoint: Option<PalletMultisigTimepoint>;
      readonly callHash: U8aFixed;
      readonly maxWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isCancelAsMulti: boolean;
    readonly asCancelAsMulti: {
      readonly threshold: u16;
      readonly otherSignatories: Vec<AccountId32>;
      readonly timepoint: PalletMultisigTimepoint;
      readonly callHash: U8aFixed;
    } & Struct;
    readonly isPokeDeposit: boolean;
    readonly asPokeDeposit: {
      readonly threshold: u16;
      readonly otherSignatories: Vec<AccountId32>;
      readonly callHash: U8aFixed;
    } & Struct;
    readonly type: 'AsMultiThreshold1' | 'AsMulti' | 'ApproveAsMulti' | 'CancelAsMulti' | 'PokeDeposit';
  }

  /** @name PalletBountiesCall (330) */
  interface PalletBountiesCall extends Enum {
    readonly isProposeBounty: boolean;
    readonly asProposeBounty: {
      readonly value: Compact<u128>;
      readonly description: Bytes;
    } & Struct;
    readonly isApproveBounty: boolean;
    readonly asApproveBounty: {
      readonly bountyId: Compact<u32>;
    } & Struct;
    readonly isProposeCurator: boolean;
    readonly asProposeCurator: {
      readonly bountyId: Compact<u32>;
      readonly curator: MultiAddress;
      readonly fee: Compact<u128>;
    } & Struct;
    readonly isUnassignCurator: boolean;
    readonly asUnassignCurator: {
      readonly bountyId: Compact<u32>;
    } & Struct;
    readonly isAcceptCurator: boolean;
    readonly asAcceptCurator: {
      readonly bountyId: Compact<u32>;
    } & Struct;
    readonly isAwardBounty: boolean;
    readonly asAwardBounty: {
      readonly bountyId: Compact<u32>;
      readonly beneficiary: MultiAddress;
    } & Struct;
    readonly isClaimBounty: boolean;
    readonly asClaimBounty: {
      readonly bountyId: Compact<u32>;
    } & Struct;
    readonly isCloseBounty: boolean;
    readonly asCloseBounty: {
      readonly bountyId: Compact<u32>;
    } & Struct;
    readonly isExtendBountyExpiry: boolean;
    readonly asExtendBountyExpiry: {
      readonly bountyId: Compact<u32>;
      readonly remark: Bytes;
    } & Struct;
    readonly isApproveBountyWithCurator: boolean;
    readonly asApproveBountyWithCurator: {
      readonly bountyId: Compact<u32>;
      readonly curator: MultiAddress;
      readonly fee: Compact<u128>;
    } & Struct;
    readonly type: 'ProposeBounty' | 'ApproveBounty' | 'ProposeCurator' | 'UnassignCurator' | 'AcceptCurator' | 'AwardBounty' | 'ClaimBounty' | 'CloseBounty' | 'ExtendBountyExpiry' | 'ApproveBountyWithCurator';
  }

  /** @name PalletTipsCall (331) */
  interface PalletTipsCall extends Enum {
    readonly isReportAwesome: boolean;
    readonly asReportAwesome: {
      readonly reason: Bytes;
      readonly who: MultiAddress;
    } & Struct;
    readonly isRetractTip: boolean;
    readonly asRetractTip: {
      readonly hash_: H256;
    } & Struct;
    readonly isTipNew: boolean;
    readonly asTipNew: {
      readonly reason: Bytes;
      readonly who: MultiAddress;
      readonly tipValue: Compact<u128>;
    } & Struct;
    readonly isTip: boolean;
    readonly asTip: {
      readonly hash_: H256;
      readonly tipValue: Compact<u128>;
    } & Struct;
    readonly isCloseTip: boolean;
    readonly asCloseTip: {
      readonly hash_: H256;
    } & Struct;
    readonly isSlashTip: boolean;
    readonly asSlashTip: {
      readonly hash_: H256;
    } & Struct;
    readonly type: 'ReportAwesome' | 'RetractTip' | 'TipNew' | 'Tip' | 'CloseTip' | 'SlashTip';
  }

  /** @name PalletAssetsCall (332) */
  interface PalletAssetsCall extends Enum {
    readonly isCreate: boolean;
    readonly asCreate: {
      readonly id: Compact<u32>;
      readonly admin: MultiAddress;
      readonly minBalance: u128;
    } & Struct;
    readonly isForceCreate: boolean;
    readonly asForceCreate: {
      readonly id: Compact<u32>;
      readonly owner: MultiAddress;
      readonly isSufficient: bool;
      readonly minBalance: Compact<u128>;
    } & Struct;
    readonly isStartDestroy: boolean;
    readonly asStartDestroy: {
      readonly id: Compact<u32>;
    } & Struct;
    readonly isDestroyAccounts: boolean;
    readonly asDestroyAccounts: {
      readonly id: Compact<u32>;
    } & Struct;
    readonly isDestroyApprovals: boolean;
    readonly asDestroyApprovals: {
      readonly id: Compact<u32>;
    } & Struct;
    readonly isFinishDestroy: boolean;
    readonly asFinishDestroy: {
      readonly id: Compact<u32>;
    } & Struct;
    readonly isMint: boolean;
    readonly asMint: {
      readonly id: Compact<u32>;
      readonly beneficiary: MultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isBurn: boolean;
    readonly asBurn: {
      readonly id: Compact<u32>;
      readonly who: MultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly id: Compact<u32>;
      readonly target: MultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isTransferKeepAlive: boolean;
    readonly asTransferKeepAlive: {
      readonly id: Compact<u32>;
      readonly target: MultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isForceTransfer: boolean;
    readonly asForceTransfer: {
      readonly id: Compact<u32>;
      readonly source: MultiAddress;
      readonly dest: MultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isFreeze: boolean;
    readonly asFreeze: {
      readonly id: Compact<u32>;
      readonly who: MultiAddress;
    } & Struct;
    readonly isThaw: boolean;
    readonly asThaw: {
      readonly id: Compact<u32>;
      readonly who: MultiAddress;
    } & Struct;
    readonly isFreezeAsset: boolean;
    readonly asFreezeAsset: {
      readonly id: Compact<u32>;
    } & Struct;
    readonly isThawAsset: boolean;
    readonly asThawAsset: {
      readonly id: Compact<u32>;
    } & Struct;
    readonly isTransferOwnership: boolean;
    readonly asTransferOwnership: {
      readonly id: Compact<u32>;
      readonly owner: MultiAddress;
    } & Struct;
    readonly isSetTeam: boolean;
    readonly asSetTeam: {
      readonly id: Compact<u32>;
      readonly issuer: MultiAddress;
      readonly admin: MultiAddress;
      readonly freezer: MultiAddress;
    } & Struct;
    readonly isSetMetadata: boolean;
    readonly asSetMetadata: {
      readonly id: Compact<u32>;
      readonly name: Bytes;
      readonly symbol: Bytes;
      readonly decimals: u8;
    } & Struct;
    readonly isClearMetadata: boolean;
    readonly asClearMetadata: {
      readonly id: Compact<u32>;
    } & Struct;
    readonly isForceSetMetadata: boolean;
    readonly asForceSetMetadata: {
      readonly id: Compact<u32>;
      readonly name: Bytes;
      readonly symbol: Bytes;
      readonly decimals: u8;
      readonly isFrozen: bool;
    } & Struct;
    readonly isForceClearMetadata: boolean;
    readonly asForceClearMetadata: {
      readonly id: Compact<u32>;
    } & Struct;
    readonly isForceAssetStatus: boolean;
    readonly asForceAssetStatus: {
      readonly id: Compact<u32>;
      readonly owner: MultiAddress;
      readonly issuer: MultiAddress;
      readonly admin: MultiAddress;
      readonly freezer: MultiAddress;
      readonly minBalance: Compact<u128>;
      readonly isSufficient: bool;
      readonly isFrozen: bool;
    } & Struct;
    readonly isApproveTransfer: boolean;
    readonly asApproveTransfer: {
      readonly id: Compact<u32>;
      readonly delegate: MultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isCancelApproval: boolean;
    readonly asCancelApproval: {
      readonly id: Compact<u32>;
      readonly delegate: MultiAddress;
    } & Struct;
    readonly isForceCancelApproval: boolean;
    readonly asForceCancelApproval: {
      readonly id: Compact<u32>;
      readonly owner: MultiAddress;
      readonly delegate: MultiAddress;
    } & Struct;
    readonly isTransferApproved: boolean;
    readonly asTransferApproved: {
      readonly id: Compact<u32>;
      readonly owner: MultiAddress;
      readonly destination: MultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isTouch: boolean;
    readonly asTouch: {
      readonly id: Compact<u32>;
    } & Struct;
    readonly isRefund: boolean;
    readonly asRefund: {
      readonly id: Compact<u32>;
      readonly allowBurn: bool;
    } & Struct;
    readonly isSetMinBalance: boolean;
    readonly asSetMinBalance: {
      readonly id: Compact<u32>;
      readonly minBalance: u128;
    } & Struct;
    readonly isTouchOther: boolean;
    readonly asTouchOther: {
      readonly id: Compact<u32>;
      readonly who: MultiAddress;
    } & Struct;
    readonly isRefundOther: boolean;
    readonly asRefundOther: {
      readonly id: Compact<u32>;
      readonly who: MultiAddress;
    } & Struct;
    readonly isBlock: boolean;
    readonly asBlock: {
      readonly id: Compact<u32>;
      readonly who: MultiAddress;
    } & Struct;
    readonly isTransferAll: boolean;
    readonly asTransferAll: {
      readonly id: Compact<u32>;
      readonly dest: MultiAddress;
      readonly keepAlive: bool;
    } & Struct;
    readonly type: 'Create' | 'ForceCreate' | 'StartDestroy' | 'DestroyAccounts' | 'DestroyApprovals' | 'FinishDestroy' | 'Mint' | 'Burn' | 'Transfer' | 'TransferKeepAlive' | 'ForceTransfer' | 'Freeze' | 'Thaw' | 'FreezeAsset' | 'ThawAsset' | 'TransferOwnership' | 'SetTeam' | 'SetMetadata' | 'ClearMetadata' | 'ForceSetMetadata' | 'ForceClearMetadata' | 'ForceAssetStatus' | 'ApproveTransfer' | 'CancelApproval' | 'ForceCancelApproval' | 'TransferApproved' | 'Touch' | 'Refund' | 'SetMinBalance' | 'TouchOther' | 'RefundOther' | 'Block' | 'TransferAll';
  }

  /** @name PalletBeefyCall (334) */
  interface PalletBeefyCall extends Enum {
    readonly isReportDoubleVoting: boolean;
    readonly asReportDoubleVoting: {
      readonly equivocationProof: SpConsensusBeefyDoubleVotingProof;
      readonly keyOwnerProof: SpSessionMembershipProof;
    } & Struct;
    readonly isReportDoubleVotingUnsigned: boolean;
    readonly asReportDoubleVotingUnsigned: {
      readonly equivocationProof: SpConsensusBeefyDoubleVotingProof;
      readonly keyOwnerProof: SpSessionMembershipProof;
    } & Struct;
    readonly isSetNewGenesis: boolean;
    readonly asSetNewGenesis: {
      readonly delayInBlocks: u32;
    } & Struct;
    readonly isReportForkVoting: boolean;
    readonly asReportForkVoting: {
      readonly equivocationProof: SpConsensusBeefyForkVotingProofAncestryProof;
      readonly keyOwnerProof: SpSessionMembershipProof;
    } & Struct;
    readonly isReportForkVotingUnsigned: boolean;
    readonly asReportForkVotingUnsigned: {
      readonly equivocationProof: SpConsensusBeefyForkVotingProofAncestryProof;
      readonly keyOwnerProof: SpSessionMembershipProof;
    } & Struct;
    readonly isReportFutureBlockVoting: boolean;
    readonly asReportFutureBlockVoting: {
      readonly equivocationProof: SpConsensusBeefyFutureBlockVotingProof;
      readonly keyOwnerProof: SpSessionMembershipProof;
    } & Struct;
    readonly isReportFutureBlockVotingUnsigned: boolean;
    readonly asReportFutureBlockVotingUnsigned: {
      readonly equivocationProof: SpConsensusBeefyFutureBlockVotingProof;
      readonly keyOwnerProof: SpSessionMembershipProof;
    } & Struct;
    readonly type: 'ReportDoubleVoting' | 'ReportDoubleVotingUnsigned' | 'SetNewGenesis' | 'ReportForkVoting' | 'ReportForkVotingUnsigned' | 'ReportFutureBlockVoting' | 'ReportFutureBlockVotingUnsigned';
  }

  /** @name SpConsensusBeefyDoubleVotingProof (335) */
  interface SpConsensusBeefyDoubleVotingProof extends Struct {
    readonly first: SpConsensusBeefyVoteMessage;
    readonly second: SpConsensusBeefyVoteMessage;
  }

  /** @name SpConsensusBeefyEcdsaCryptoSignature (336) */
  interface SpConsensusBeefyEcdsaCryptoSignature extends U8aFixed {}

  /** @name SpConsensusBeefyVoteMessage (337) */
  interface SpConsensusBeefyVoteMessage extends Struct {
    readonly commitment: SpConsensusBeefyCommitment;
    readonly id: SpConsensusBeefyEcdsaCryptoPublic;
    readonly signature: SpConsensusBeefyEcdsaCryptoSignature;
  }

  /** @name SpConsensusBeefyCommitment (338) */
  interface SpConsensusBeefyCommitment extends Struct {
    readonly payload: SpConsensusBeefyPayload;
    readonly blockNumber: u32;
    readonly validatorSetId: u64;
  }

  /** @name SpConsensusBeefyPayload (339) */
  interface SpConsensusBeefyPayload extends Vec<ITuple<[U8aFixed, Bytes]>> {}

  /** @name SpConsensusBeefyForkVotingProofAncestryProof (342) */
  interface SpConsensusBeefyForkVotingProofAncestryProof extends Struct {
    readonly vote: SpConsensusBeefyVoteMessage;
    readonly ancestryProof: SpMmrPrimitivesAncestryProof;
    readonly header: SpRuntimeHeader;
  }

  /** @name SpMmrPrimitivesAncestryProof (343) */
  interface SpMmrPrimitivesAncestryProof extends Struct {
    readonly prevPeaks: Vec<H256>;
    readonly prevLeafCount: u64;
    readonly leafCount: u64;
    readonly items: Vec<ITuple<[u64, H256]>>;
  }

  /** @name SpConsensusBeefyFutureBlockVotingProof (346) */
  interface SpConsensusBeefyFutureBlockVotingProof extends Struct {
    readonly vote: SpConsensusBeefyVoteMessage;
  }

  /** @name PalletLotteryCall (347) */
  interface PalletLotteryCall extends Enum {
    readonly isBuyTicket: boolean;
    readonly asBuyTicket: {
      readonly call: Call;
    } & Struct;
    readonly isSetCalls: boolean;
    readonly asSetCalls: {
      readonly calls: Vec<Call>;
    } & Struct;
    readonly isStartLottery: boolean;
    readonly asStartLottery: {
      readonly price: u128;
      readonly length: u32;
      readonly delay: u32;
      readonly repeat: bool;
    } & Struct;
    readonly isStopRepeat: boolean;
    readonly type: 'BuyTicket' | 'SetCalls' | 'StartLottery' | 'StopRepeat';
  }

  /** @name PalletNisCall (348) */
  interface PalletNisCall extends Enum {
    readonly isPlaceBid: boolean;
    readonly asPlaceBid: {
      readonly amount: Compact<u128>;
      readonly duration: u32;
    } & Struct;
    readonly isRetractBid: boolean;
    readonly asRetractBid: {
      readonly amount: Compact<u128>;
      readonly duration: u32;
    } & Struct;
    readonly isFundDeficit: boolean;
    readonly isThawPrivate: boolean;
    readonly asThawPrivate: {
      readonly index: Compact<u32>;
      readonly maybeProportion: Option<Perquintill>;
    } & Struct;
    readonly isThawCommunal: boolean;
    readonly asThawCommunal: {
      readonly index: Compact<u32>;
    } & Struct;
    readonly isCommunify: boolean;
    readonly asCommunify: {
      readonly index: Compact<u32>;
    } & Struct;
    readonly isPrivatize: boolean;
    readonly asPrivatize: {
      readonly index: Compact<u32>;
    } & Struct;
    readonly type: 'PlaceBid' | 'RetractBid' | 'FundDeficit' | 'ThawPrivate' | 'ThawCommunal' | 'Communify' | 'Privatize';
  }

  /** @name PalletUniquesCall (350) */
  interface PalletUniquesCall extends Enum {
    readonly isCreate: boolean;
    readonly asCreate: {
      readonly collection: u32;
      readonly admin: MultiAddress;
    } & Struct;
    readonly isForceCreate: boolean;
    readonly asForceCreate: {
      readonly collection: u32;
      readonly owner: MultiAddress;
      readonly freeHolding: bool;
    } & Struct;
    readonly isDestroy: boolean;
    readonly asDestroy: {
      readonly collection: u32;
      readonly witness: PalletUniquesDestroyWitness;
    } & Struct;
    readonly isMint: boolean;
    readonly asMint: {
      readonly collection: u32;
      readonly item: u32;
      readonly owner: MultiAddress;
    } & Struct;
    readonly isBurn: boolean;
    readonly asBurn: {
      readonly collection: u32;
      readonly item: u32;
      readonly checkOwner: Option<MultiAddress>;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly collection: u32;
      readonly item: u32;
      readonly dest: MultiAddress;
    } & Struct;
    readonly isRedeposit: boolean;
    readonly asRedeposit: {
      readonly collection: u32;
      readonly items: Vec<u32>;
    } & Struct;
    readonly isFreeze: boolean;
    readonly asFreeze: {
      readonly collection: u32;
      readonly item: u32;
    } & Struct;
    readonly isThaw: boolean;
    readonly asThaw: {
      readonly collection: u32;
      readonly item: u32;
    } & Struct;
    readonly isFreezeCollection: boolean;
    readonly asFreezeCollection: {
      readonly collection: u32;
    } & Struct;
    readonly isThawCollection: boolean;
    readonly asThawCollection: {
      readonly collection: u32;
    } & Struct;
    readonly isTransferOwnership: boolean;
    readonly asTransferOwnership: {
      readonly collection: u32;
      readonly newOwner: MultiAddress;
    } & Struct;
    readonly isSetTeam: boolean;
    readonly asSetTeam: {
      readonly collection: u32;
      readonly issuer: MultiAddress;
      readonly admin: MultiAddress;
      readonly freezer: MultiAddress;
    } & Struct;
    readonly isApproveTransfer: boolean;
    readonly asApproveTransfer: {
      readonly collection: u32;
      readonly item: u32;
      readonly delegate: MultiAddress;
    } & Struct;
    readonly isCancelApproval: boolean;
    readonly asCancelApproval: {
      readonly collection: u32;
      readonly item: u32;
      readonly maybeCheckDelegate: Option<MultiAddress>;
    } & Struct;
    readonly isForceItemStatus: boolean;
    readonly asForceItemStatus: {
      readonly collection: u32;
      readonly owner: MultiAddress;
      readonly issuer: MultiAddress;
      readonly admin: MultiAddress;
      readonly freezer: MultiAddress;
      readonly freeHolding: bool;
      readonly isFrozen: bool;
    } & Struct;
    readonly isSetAttribute: boolean;
    readonly asSetAttribute: {
      readonly collection: u32;
      readonly maybeItem: Option<u32>;
      readonly key: Bytes;
      readonly value: Bytes;
    } & Struct;
    readonly isClearAttribute: boolean;
    readonly asClearAttribute: {
      readonly collection: u32;
      readonly maybeItem: Option<u32>;
      readonly key: Bytes;
    } & Struct;
    readonly isSetMetadata: boolean;
    readonly asSetMetadata: {
      readonly collection: u32;
      readonly item: u32;
      readonly data: Bytes;
      readonly isFrozen: bool;
    } & Struct;
    readonly isClearMetadata: boolean;
    readonly asClearMetadata: {
      readonly collection: u32;
      readonly item: u32;
    } & Struct;
    readonly isSetCollectionMetadata: boolean;
    readonly asSetCollectionMetadata: {
      readonly collection: u32;
      readonly data: Bytes;
      readonly isFrozen: bool;
    } & Struct;
    readonly isClearCollectionMetadata: boolean;
    readonly asClearCollectionMetadata: {
      readonly collection: u32;
    } & Struct;
    readonly isSetAcceptOwnership: boolean;
    readonly asSetAcceptOwnership: {
      readonly maybeCollection: Option<u32>;
    } & Struct;
    readonly isSetCollectionMaxSupply: boolean;
    readonly asSetCollectionMaxSupply: {
      readonly collection: u32;
      readonly maxSupply: u32;
    } & Struct;
    readonly isSetPrice: boolean;
    readonly asSetPrice: {
      readonly collection: u32;
      readonly item: u32;
      readonly price: Option<u128>;
      readonly whitelistedBuyer: Option<MultiAddress>;
    } & Struct;
    readonly isBuyItem: boolean;
    readonly asBuyItem: {
      readonly collection: u32;
      readonly item: u32;
      readonly bidPrice: u128;
    } & Struct;
    readonly type: 'Create' | 'ForceCreate' | 'Destroy' | 'Mint' | 'Burn' | 'Transfer' | 'Redeposit' | 'Freeze' | 'Thaw' | 'FreezeCollection' | 'ThawCollection' | 'TransferOwnership' | 'SetTeam' | 'ApproveTransfer' | 'CancelApproval' | 'ForceItemStatus' | 'SetAttribute' | 'ClearAttribute' | 'SetMetadata' | 'ClearMetadata' | 'SetCollectionMetadata' | 'ClearCollectionMetadata' | 'SetAcceptOwnership' | 'SetCollectionMaxSupply' | 'SetPrice' | 'BuyItem';
  }

  /** @name PalletUniquesDestroyWitness (351) */
  interface PalletUniquesDestroyWitness extends Struct {
    readonly items: Compact<u32>;
    readonly itemMetadatas: Compact<u32>;
    readonly attributes: Compact<u32>;
  }

  /** @name PalletNftsCall (353) */
  interface PalletNftsCall extends Enum {
    readonly isCreate: boolean;
    readonly asCreate: {
      readonly admin: MultiAddress;
      readonly config: PalletNftsCollectionConfig;
    } & Struct;
    readonly isForceCreate: boolean;
    readonly asForceCreate: {
      readonly owner: MultiAddress;
      readonly config: PalletNftsCollectionConfig;
    } & Struct;
    readonly isDestroy: boolean;
    readonly asDestroy: {
      readonly collection: u32;
      readonly witness: PalletNftsDestroyWitness;
    } & Struct;
    readonly isMint: boolean;
    readonly asMint: {
      readonly collection: u32;
      readonly item: u32;
      readonly mintTo: MultiAddress;
      readonly witnessData: Option<PalletNftsMintWitness>;
    } & Struct;
    readonly isForceMint: boolean;
    readonly asForceMint: {
      readonly collection: u32;
      readonly item: u32;
      readonly mintTo: MultiAddress;
      readonly itemConfig: PalletNftsItemConfig;
    } & Struct;
    readonly isBurn: boolean;
    readonly asBurn: {
      readonly collection: u32;
      readonly item: u32;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly collection: u32;
      readonly item: u32;
      readonly dest: MultiAddress;
    } & Struct;
    readonly isRedeposit: boolean;
    readonly asRedeposit: {
      readonly collection: u32;
      readonly items: Vec<u32>;
    } & Struct;
    readonly isLockItemTransfer: boolean;
    readonly asLockItemTransfer: {
      readonly collection: u32;
      readonly item: u32;
    } & Struct;
    readonly isUnlockItemTransfer: boolean;
    readonly asUnlockItemTransfer: {
      readonly collection: u32;
      readonly item: u32;
    } & Struct;
    readonly isLockCollection: boolean;
    readonly asLockCollection: {
      readonly collection: u32;
      readonly lockSettings: u64;
    } & Struct;
    readonly isTransferOwnership: boolean;
    readonly asTransferOwnership: {
      readonly collection: u32;
      readonly newOwner: MultiAddress;
    } & Struct;
    readonly isSetTeam: boolean;
    readonly asSetTeam: {
      readonly collection: u32;
      readonly issuer: Option<MultiAddress>;
      readonly admin: Option<MultiAddress>;
      readonly freezer: Option<MultiAddress>;
    } & Struct;
    readonly isForceCollectionOwner: boolean;
    readonly asForceCollectionOwner: {
      readonly collection: u32;
      readonly owner: MultiAddress;
    } & Struct;
    readonly isForceCollectionConfig: boolean;
    readonly asForceCollectionConfig: {
      readonly collection: u32;
      readonly config: PalletNftsCollectionConfig;
    } & Struct;
    readonly isApproveTransfer: boolean;
    readonly asApproveTransfer: {
      readonly collection: u32;
      readonly item: u32;
      readonly delegate: MultiAddress;
      readonly maybeDeadline: Option<u32>;
    } & Struct;
    readonly isCancelApproval: boolean;
    readonly asCancelApproval: {
      readonly collection: u32;
      readonly item: u32;
      readonly delegate: MultiAddress;
    } & Struct;
    readonly isClearAllTransferApprovals: boolean;
    readonly asClearAllTransferApprovals: {
      readonly collection: u32;
      readonly item: u32;
    } & Struct;
    readonly isLockItemProperties: boolean;
    readonly asLockItemProperties: {
      readonly collection: u32;
      readonly item: u32;
      readonly lockMetadata: bool;
      readonly lockAttributes: bool;
    } & Struct;
    readonly isSetAttribute: boolean;
    readonly asSetAttribute: {
      readonly collection: u32;
      readonly maybeItem: Option<u32>;
      readonly namespace: PalletNftsAttributeNamespace;
      readonly key: Bytes;
      readonly value: Bytes;
    } & Struct;
    readonly isForceSetAttribute: boolean;
    readonly asForceSetAttribute: {
      readonly setAs: Option<AccountId32>;
      readonly collection: u32;
      readonly maybeItem: Option<u32>;
      readonly namespace: PalletNftsAttributeNamespace;
      readonly key: Bytes;
      readonly value: Bytes;
    } & Struct;
    readonly isClearAttribute: boolean;
    readonly asClearAttribute: {
      readonly collection: u32;
      readonly maybeItem: Option<u32>;
      readonly namespace: PalletNftsAttributeNamespace;
      readonly key: Bytes;
    } & Struct;
    readonly isApproveItemAttributes: boolean;
    readonly asApproveItemAttributes: {
      readonly collection: u32;
      readonly item: u32;
      readonly delegate: MultiAddress;
    } & Struct;
    readonly isCancelItemAttributesApproval: boolean;
    readonly asCancelItemAttributesApproval: {
      readonly collection: u32;
      readonly item: u32;
      readonly delegate: MultiAddress;
      readonly witness: PalletNftsCancelAttributesApprovalWitness;
    } & Struct;
    readonly isSetMetadata: boolean;
    readonly asSetMetadata: {
      readonly collection: u32;
      readonly item: u32;
      readonly data: Bytes;
    } & Struct;
    readonly isClearMetadata: boolean;
    readonly asClearMetadata: {
      readonly collection: u32;
      readonly item: u32;
    } & Struct;
    readonly isSetCollectionMetadata: boolean;
    readonly asSetCollectionMetadata: {
      readonly collection: u32;
      readonly data: Bytes;
    } & Struct;
    readonly isClearCollectionMetadata: boolean;
    readonly asClearCollectionMetadata: {
      readonly collection: u32;
    } & Struct;
    readonly isSetAcceptOwnership: boolean;
    readonly asSetAcceptOwnership: {
      readonly maybeCollection: Option<u32>;
    } & Struct;
    readonly isSetCollectionMaxSupply: boolean;
    readonly asSetCollectionMaxSupply: {
      readonly collection: u32;
      readonly maxSupply: u32;
    } & Struct;
    readonly isUpdateMintSettings: boolean;
    readonly asUpdateMintSettings: {
      readonly collection: u32;
      readonly mintSettings: PalletNftsMintSettings;
    } & Struct;
    readonly isSetPrice: boolean;
    readonly asSetPrice: {
      readonly collection: u32;
      readonly item: u32;
      readonly price: Option<u128>;
      readonly whitelistedBuyer: Option<MultiAddress>;
    } & Struct;
    readonly isBuyItem: boolean;
    readonly asBuyItem: {
      readonly collection: u32;
      readonly item: u32;
      readonly bidPrice: u128;
    } & Struct;
    readonly isPayTips: boolean;
    readonly asPayTips: {
      readonly tips: Vec<PalletNftsItemTip>;
    } & Struct;
    readonly isCreateSwap: boolean;
    readonly asCreateSwap: {
      readonly offeredCollection: u32;
      readonly offeredItem: u32;
      readonly desiredCollection: u32;
      readonly maybeDesiredItem: Option<u32>;
      readonly maybePrice: Option<PalletNftsPriceWithDirection>;
      readonly duration: u32;
    } & Struct;
    readonly isCancelSwap: boolean;
    readonly asCancelSwap: {
      readonly offeredCollection: u32;
      readonly offeredItem: u32;
    } & Struct;
    readonly isClaimSwap: boolean;
    readonly asClaimSwap: {
      readonly sendCollection: u32;
      readonly sendItem: u32;
      readonly receiveCollection: u32;
      readonly receiveItem: u32;
      readonly witnessPrice: Option<PalletNftsPriceWithDirection>;
    } & Struct;
    readonly isMintPreSigned: boolean;
    readonly asMintPreSigned: {
      readonly mintData: PalletNftsPreSignedMint;
      readonly signature: SpRuntimeMultiSignature;
      readonly signer: AccountId32;
    } & Struct;
    readonly isSetAttributesPreSigned: boolean;
    readonly asSetAttributesPreSigned: {
      readonly data: PalletNftsPreSignedAttributes;
      readonly signature: SpRuntimeMultiSignature;
      readonly signer: AccountId32;
    } & Struct;
    readonly type: 'Create' | 'ForceCreate' | 'Destroy' | 'Mint' | 'ForceMint' | 'Burn' | 'Transfer' | 'Redeposit' | 'LockItemTransfer' | 'UnlockItemTransfer' | 'LockCollection' | 'TransferOwnership' | 'SetTeam' | 'ForceCollectionOwner' | 'ForceCollectionConfig' | 'ApproveTransfer' | 'CancelApproval' | 'ClearAllTransferApprovals' | 'LockItemProperties' | 'SetAttribute' | 'ForceSetAttribute' | 'ClearAttribute' | 'ApproveItemAttributes' | 'CancelItemAttributesApproval' | 'SetMetadata' | 'ClearMetadata' | 'SetCollectionMetadata' | 'ClearCollectionMetadata' | 'SetAcceptOwnership' | 'SetCollectionMaxSupply' | 'UpdateMintSettings' | 'SetPrice' | 'BuyItem' | 'PayTips' | 'CreateSwap' | 'CancelSwap' | 'ClaimSwap' | 'MintPreSigned' | 'SetAttributesPreSigned';
  }

  /** @name PalletNftsCollectionConfig (354) */
  interface PalletNftsCollectionConfig extends Struct {
    readonly settings: u64;
    readonly maxSupply: Option<u32>;
    readonly mintSettings: PalletNftsMintSettings;
  }

  /** @name PalletNftsCollectionSetting (356) */
  interface PalletNftsCollectionSetting extends Enum {
    readonly isTransferableItems: boolean;
    readonly isUnlockedMetadata: boolean;
    readonly isUnlockedAttributes: boolean;
    readonly isUnlockedMaxSupply: boolean;
    readonly isDepositRequired: boolean;
    readonly type: 'TransferableItems' | 'UnlockedMetadata' | 'UnlockedAttributes' | 'UnlockedMaxSupply' | 'DepositRequired';
  }

  /** @name PalletNftsMintSettings (357) */
  interface PalletNftsMintSettings extends Struct {
    readonly mintType: PalletNftsMintType;
    readonly price: Option<u128>;
    readonly startBlock: Option<u32>;
    readonly endBlock: Option<u32>;
    readonly defaultItemSettings: u64;
  }

  /** @name PalletNftsMintType (358) */
  interface PalletNftsMintType extends Enum {
    readonly isIssuer: boolean;
    readonly isPublic: boolean;
    readonly isHolderOf: boolean;
    readonly asHolderOf: u32;
    readonly type: 'Issuer' | 'Public' | 'HolderOf';
  }

  /** @name PalletNftsItemSetting (360) */
  interface PalletNftsItemSetting extends Enum {
    readonly isTransferable: boolean;
    readonly isUnlockedMetadata: boolean;
    readonly isUnlockedAttributes: boolean;
    readonly type: 'Transferable' | 'UnlockedMetadata' | 'UnlockedAttributes';
  }

  /** @name PalletNftsDestroyWitness (361) */
  interface PalletNftsDestroyWitness extends Struct {
    readonly itemMetadatas: Compact<u32>;
    readonly itemConfigs: Compact<u32>;
    readonly attributes: Compact<u32>;
  }

  /** @name PalletNftsMintWitness (363) */
  interface PalletNftsMintWitness extends Struct {
    readonly ownedItem: Option<u32>;
    readonly mintPrice: Option<u128>;
  }

  /** @name PalletNftsItemConfig (364) */
  interface PalletNftsItemConfig extends Struct {
    readonly settings: u64;
  }

  /** @name PalletNftsCancelAttributesApprovalWitness (365) */
  interface PalletNftsCancelAttributesApprovalWitness extends Struct {
    readonly accountAttributes: u32;
  }

  /** @name PalletNftsItemTip (367) */
  interface PalletNftsItemTip extends Struct {
    readonly collection: u32;
    readonly item: u32;
    readonly receiver: AccountId32;
    readonly amount: u128;
  }

  /** @name PalletNftsPreSignedMint (369) */
  interface PalletNftsPreSignedMint extends Struct {
    readonly collection: u32;
    readonly item: u32;
    readonly attributes: Vec<ITuple<[Bytes, Bytes]>>;
    readonly metadata: Bytes;
    readonly onlyAccount: Option<AccountId32>;
    readonly deadline: u32;
    readonly mintPrice: Option<u128>;
  }

  /** @name PalletNftsPreSignedAttributes (370) */
  interface PalletNftsPreSignedAttributes extends Struct {
    readonly collection: u32;
    readonly item: u32;
    readonly attributes: Vec<ITuple<[Bytes, Bytes]>>;
    readonly namespace: PalletNftsAttributeNamespace;
    readonly deadline: u32;
  }

  /** @name PalletNftFractionalizationCall (371) */
  interface PalletNftFractionalizationCall extends Enum {
    readonly isFractionalize: boolean;
    readonly asFractionalize: {
      readonly nftCollectionId: u32;
      readonly nftId: u32;
      readonly assetId: u32;
      readonly beneficiary: MultiAddress;
      readonly fractions: u128;
    } & Struct;
    readonly isUnify: boolean;
    readonly asUnify: {
      readonly nftCollectionId: u32;
      readonly nftId: u32;
      readonly assetId: u32;
      readonly beneficiary: MultiAddress;
    } & Struct;
    readonly type: 'Fractionalize' | 'Unify';
  }

  /** @name PalletSalaryCall (372) */
  interface PalletSalaryCall extends Enum {
    readonly isInit: boolean;
    readonly isBump: boolean;
    readonly isInduct: boolean;
    readonly isRegister: boolean;
    readonly isPayout: boolean;
    readonly isPayoutOther: boolean;
    readonly asPayoutOther: {
      readonly beneficiary: AccountId32;
    } & Struct;
    readonly isCheckPayment: boolean;
    readonly type: 'Init' | 'Bump' | 'Induct' | 'Register' | 'Payout' | 'PayoutOther' | 'CheckPayment';
  }

  /** @name PalletCoreFellowshipCall (373) */
  interface PalletCoreFellowshipCall extends Enum {
    readonly isBump: boolean;
    readonly asBump: {
      readonly who: AccountId32;
    } & Struct;
    readonly isSetParams: boolean;
    readonly asSetParams: {
      readonly params: PalletCoreFellowshipParamsTypeU128;
    } & Struct;
    readonly isSetActive: boolean;
    readonly asSetActive: {
      readonly isActive: bool;
    } & Struct;
    readonly isApprove: boolean;
    readonly asApprove: {
      readonly who: AccountId32;
      readonly atRank: u16;
    } & Struct;
    readonly isInduct: boolean;
    readonly asInduct: {
      readonly who: AccountId32;
    } & Struct;
    readonly isPromote: boolean;
    readonly asPromote: {
      readonly who: AccountId32;
      readonly toRank: u16;
    } & Struct;
    readonly isOffboard: boolean;
    readonly asOffboard: {
      readonly who: AccountId32;
    } & Struct;
    readonly isSubmitEvidence: boolean;
    readonly asSubmitEvidence: {
      readonly wish: PalletCoreFellowshipWish;
      readonly evidence: Bytes;
    } & Struct;
    readonly isImport: boolean;
    readonly isSetPartialParams: boolean;
    readonly asSetPartialParams: {
      readonly partialParams: PalletCoreFellowshipParamsTypeOption;
    } & Struct;
    readonly isPromoteFast: boolean;
    readonly asPromoteFast: {
      readonly who: AccountId32;
      readonly toRank: u16;
    } & Struct;
    readonly isImportMember: boolean;
    readonly asImportMember: {
      readonly who: AccountId32;
    } & Struct;
    readonly type: 'Bump' | 'SetParams' | 'SetActive' | 'Approve' | 'Induct' | 'Promote' | 'Offboard' | 'SubmitEvidence' | 'Import' | 'SetPartialParams' | 'PromoteFast' | 'ImportMember';
  }

  /** @name PalletCoreFellowshipParamsTypeOption (374) */
  interface PalletCoreFellowshipParamsTypeOption extends Struct {
    readonly activeSalary: Vec<Option<u128>>;
    readonly passiveSalary: Vec<Option<u128>>;
    readonly demotionPeriod: Vec<Option<u32>>;
    readonly minPromotionPeriod: Vec<Option<u32>>;
    readonly offboardTimeout: Option<u32>;
  }

  /** @name PalletTransactionStorageCall (379) */
  interface PalletTransactionStorageCall extends Enum {
    readonly isStore: boolean;
    readonly asStore: {
      readonly data: Bytes;
    } & Struct;
    readonly isRenew: boolean;
    readonly asRenew: {
      readonly block: u32;
      readonly index: u32;
    } & Struct;
    readonly isCheckProof: boolean;
    readonly asCheckProof: {
      readonly proof: SpTransactionStorageProofTransactionStorageProof;
    } & Struct;
    readonly type: 'Store' | 'Renew' | 'CheckProof';
  }

  /** @name SpTransactionStorageProofTransactionStorageProof (380) */
  interface SpTransactionStorageProofTransactionStorageProof extends Struct {
    readonly chunk: Bytes;
    readonly proof: Vec<Bytes>;
  }

  /** @name PalletBagsListCall (381) */
  interface PalletBagsListCall extends Enum {
    readonly isRebag: boolean;
    readonly asRebag: {
      readonly dislocated: MultiAddress;
    } & Struct;
    readonly isPutInFrontOf: boolean;
    readonly asPutInFrontOf: {
      readonly lighter: MultiAddress;
    } & Struct;
    readonly isPutInFrontOfOther: boolean;
    readonly asPutInFrontOfOther: {
      readonly heavier: MultiAddress;
      readonly lighter: MultiAddress;
    } & Struct;
    readonly type: 'Rebag' | 'PutInFrontOf' | 'PutInFrontOfOther';
  }

  /** @name PalletStateTrieMigrationCall (382) */
  interface PalletStateTrieMigrationCall extends Enum {
    readonly isControlAutoMigration: boolean;
    readonly asControlAutoMigration: {
      readonly maybeConfig: Option<PalletStateTrieMigrationMigrationLimits>;
    } & Struct;
    readonly isContinueMigrate: boolean;
    readonly asContinueMigrate: {
      readonly limits: PalletStateTrieMigrationMigrationLimits;
      readonly realSizeUpper: u32;
      readonly witnessTask: PalletStateTrieMigrationMigrationTask;
    } & Struct;
    readonly isMigrateCustomTop: boolean;
    readonly asMigrateCustomTop: {
      readonly keys_: Vec<Bytes>;
      readonly witnessSize: u32;
    } & Struct;
    readonly isMigrateCustomChild: boolean;
    readonly asMigrateCustomChild: {
      readonly root: Bytes;
      readonly childKeys: Vec<Bytes>;
      readonly totalSize: u32;
    } & Struct;
    readonly isSetSignedMaxLimits: boolean;
    readonly asSetSignedMaxLimits: {
      readonly limits: PalletStateTrieMigrationMigrationLimits;
    } & Struct;
    readonly isForceSetProgress: boolean;
    readonly asForceSetProgress: {
      readonly progressTop: PalletStateTrieMigrationProgress;
      readonly progressChild: PalletStateTrieMigrationProgress;
    } & Struct;
    readonly type: 'ControlAutoMigration' | 'ContinueMigrate' | 'MigrateCustomTop' | 'MigrateCustomChild' | 'SetSignedMaxLimits' | 'ForceSetProgress';
  }

  /** @name PalletStateTrieMigrationMigrationLimits (384) */
  interface PalletStateTrieMigrationMigrationLimits extends Struct {
    readonly size_: u32;
    readonly item: u32;
  }

  /** @name PalletStateTrieMigrationMigrationTask (385) */
  interface PalletStateTrieMigrationMigrationTask extends Struct {
    readonly progressTop: PalletStateTrieMigrationProgress;
    readonly progressChild: PalletStateTrieMigrationProgress;
    readonly size_: u32;
    readonly topItems: u32;
    readonly childItems: u32;
  }

  /** @name PalletStateTrieMigrationProgress (386) */
  interface PalletStateTrieMigrationProgress extends Enum {
    readonly isToStart: boolean;
    readonly isLastKey: boolean;
    readonly asLastKey: Bytes;
    readonly isComplete: boolean;
    readonly type: 'ToStart' | 'LastKey' | 'Complete';
  }

  /** @name PalletChildBountiesCall (388) */
  interface PalletChildBountiesCall extends Enum {
    readonly isAddChildBounty: boolean;
    readonly asAddChildBounty: {
      readonly parentBountyId: Compact<u32>;
      readonly value: Compact<u128>;
      readonly description: Bytes;
    } & Struct;
    readonly isProposeCurator: boolean;
    readonly asProposeCurator: {
      readonly parentBountyId: Compact<u32>;
      readonly childBountyId: Compact<u32>;
      readonly curator: MultiAddress;
      readonly fee: Compact<u128>;
    } & Struct;
    readonly isAcceptCurator: boolean;
    readonly asAcceptCurator: {
      readonly parentBountyId: Compact<u32>;
      readonly childBountyId: Compact<u32>;
    } & Struct;
    readonly isUnassignCurator: boolean;
    readonly asUnassignCurator: {
      readonly parentBountyId: Compact<u32>;
      readonly childBountyId: Compact<u32>;
    } & Struct;
    readonly isAwardChildBounty: boolean;
    readonly asAwardChildBounty: {
      readonly parentBountyId: Compact<u32>;
      readonly childBountyId: Compact<u32>;
      readonly beneficiary: MultiAddress;
    } & Struct;
    readonly isClaimChildBounty: boolean;
    readonly asClaimChildBounty: {
      readonly parentBountyId: Compact<u32>;
      readonly childBountyId: Compact<u32>;
    } & Struct;
    readonly isCloseChildBounty: boolean;
    readonly asCloseChildBounty: {
      readonly parentBountyId: Compact<u32>;
      readonly childBountyId: Compact<u32>;
    } & Struct;
    readonly type: 'AddChildBounty' | 'ProposeCurator' | 'AcceptCurator' | 'UnassignCurator' | 'AwardChildBounty' | 'ClaimChildBounty' | 'CloseChildBounty';
  }

  /** @name PalletReferendaCall (389) */
  interface PalletReferendaCall extends Enum {
    readonly isSubmit: boolean;
    readonly asSubmit: {
      readonly proposalOrigin: KitchensinkRuntimeOriginCaller;
      readonly proposal: FrameSupportPreimagesBounded;
      readonly enactmentMoment: FrameSupportScheduleDispatchTime;
    } & Struct;
    readonly isPlaceDecisionDeposit: boolean;
    readonly asPlaceDecisionDeposit: {
      readonly index: u32;
    } & Struct;
    readonly isRefundDecisionDeposit: boolean;
    readonly asRefundDecisionDeposit: {
      readonly index: u32;
    } & Struct;
    readonly isCancel: boolean;
    readonly asCancel: {
      readonly index: u32;
    } & Struct;
    readonly isKill: boolean;
    readonly asKill: {
      readonly index: u32;
    } & Struct;
    readonly isNudgeReferendum: boolean;
    readonly asNudgeReferendum: {
      readonly index: u32;
    } & Struct;
    readonly isOneFewerDeciding: boolean;
    readonly asOneFewerDeciding: {
      readonly track: u16;
    } & Struct;
    readonly isRefundSubmissionDeposit: boolean;
    readonly asRefundSubmissionDeposit: {
      readonly index: u32;
    } & Struct;
    readonly isSetMetadata: boolean;
    readonly asSetMetadata: {
      readonly index: u32;
      readonly maybeHash: Option<H256>;
    } & Struct;
    readonly type: 'Submit' | 'PlaceDecisionDeposit' | 'RefundDecisionDeposit' | 'Cancel' | 'Kill' | 'NudgeReferendum' | 'OneFewerDeciding' | 'RefundSubmissionDeposit' | 'SetMetadata';
  }

  /** @name FrameSupportScheduleDispatchTime (390) */
  interface FrameSupportScheduleDispatchTime extends Enum {
    readonly isAt: boolean;
    readonly asAt: u32;
    readonly isAfter: boolean;
    readonly asAfter: u32;
    readonly type: 'At' | 'After';
  }

  /** @name PalletRemarkCall (391) */
  interface PalletRemarkCall extends Enum {
    readonly isStore: boolean;
    readonly asStore: {
      readonly remark: Bytes;
    } & Struct;
    readonly type: 'Store';
  }

  /** @name PalletRootTestingCall (392) */
  interface PalletRootTestingCall extends Enum {
    readonly isFillBlock: boolean;
    readonly asFillBlock: {
      readonly ratio: Perbill;
    } & Struct;
    readonly isTriggerDefensive: boolean;
    readonly type: 'FillBlock' | 'TriggerDefensive';
  }

  /** @name PalletConvictionVotingCall (393) */
  interface PalletConvictionVotingCall extends Enum {
    readonly isVote: boolean;
    readonly asVote: {
      readonly pollIndex: Compact<u32>;
      readonly vote: PalletConvictionVotingVoteAccountVote;
    } & Struct;
    readonly isDelegate: boolean;
    readonly asDelegate: {
      readonly class: u16;
      readonly to: MultiAddress;
      readonly conviction: PalletConvictionVotingConviction;
      readonly balance: u128;
    } & Struct;
    readonly isUndelegate: boolean;
    readonly asUndelegate: {
      readonly class: u16;
    } & Struct;
    readonly isUnlock: boolean;
    readonly asUnlock: {
      readonly class: u16;
      readonly target: MultiAddress;
    } & Struct;
    readonly isRemoveVote: boolean;
    readonly asRemoveVote: {
      readonly class: Option<u16>;
      readonly index: u32;
    } & Struct;
    readonly isRemoveOtherVote: boolean;
    readonly asRemoveOtherVote: {
      readonly target: MultiAddress;
      readonly class: u16;
      readonly index: u32;
    } & Struct;
    readonly type: 'Vote' | 'Delegate' | 'Undelegate' | 'Unlock' | 'RemoveVote' | 'RemoveOtherVote';
  }

  /** @name PalletConvictionVotingVoteAccountVote (394) */
  interface PalletConvictionVotingVoteAccountVote extends Enum {
    readonly isStandard: boolean;
    readonly asStandard: {
      readonly vote: Vote;
      readonly balance: u128;
    } & Struct;
    readonly isSplit: boolean;
    readonly asSplit: {
      readonly aye: u128;
      readonly nay: u128;
    } & Struct;
    readonly isSplitAbstain: boolean;
    readonly asSplitAbstain: {
      readonly aye: u128;
      readonly nay: u128;
      readonly abstain: u128;
    } & Struct;
    readonly type: 'Standard' | 'Split' | 'SplitAbstain';
  }

  /** @name PalletConvictionVotingConviction (396) */
  interface PalletConvictionVotingConviction extends Enum {
    readonly isNone: boolean;
    readonly isLocked1x: boolean;
    readonly isLocked2x: boolean;
    readonly isLocked3x: boolean;
    readonly isLocked4x: boolean;
    readonly isLocked5x: boolean;
    readonly isLocked6x: boolean;
    readonly type: 'None' | 'Locked1x' | 'Locked2x' | 'Locked3x' | 'Locked4x' | 'Locked5x' | 'Locked6x';
  }

  /** @name PalletWhitelistCall (397) */
  interface PalletWhitelistCall extends Enum {
    readonly isWhitelistCall: boolean;
    readonly asWhitelistCall: {
      readonly callHash: H256;
    } & Struct;
    readonly isRemoveWhitelistedCall: boolean;
    readonly asRemoveWhitelistedCall: {
      readonly callHash: H256;
    } & Struct;
    readonly isDispatchWhitelistedCall: boolean;
    readonly asDispatchWhitelistedCall: {
      readonly callHash: H256;
      readonly callEncodedLen: u32;
      readonly callWeightWitness: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isDispatchWhitelistedCallWithPreimage: boolean;
    readonly asDispatchWhitelistedCallWithPreimage: {
      readonly call: Call;
    } & Struct;
    readonly type: 'WhitelistCall' | 'RemoveWhitelistedCall' | 'DispatchWhitelistedCall' | 'DispatchWhitelistedCallWithPreimage';
  }

  /** @name PalletAllianceCall (399) */
  interface PalletAllianceCall extends Enum {
    readonly isPropose: boolean;
    readonly asPropose: {
      readonly threshold: Compact<u32>;
      readonly proposal: Call;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly isVote: boolean;
    readonly asVote: {
      readonly proposal: H256;
      readonly index: Compact<u32>;
      readonly approve: bool;
    } & Struct;
    readonly isInitMembers: boolean;
    readonly asInitMembers: {
      readonly fellows: Vec<AccountId32>;
      readonly allies: Vec<AccountId32>;
    } & Struct;
    readonly isDisband: boolean;
    readonly asDisband: {
      readonly witness: PalletAllianceDisbandWitness;
    } & Struct;
    readonly isSetRule: boolean;
    readonly asSetRule: {
      readonly rule: PalletAllianceCid;
    } & Struct;
    readonly isAnnounce: boolean;
    readonly asAnnounce: {
      readonly announcement: PalletAllianceCid;
    } & Struct;
    readonly isRemoveAnnouncement: boolean;
    readonly asRemoveAnnouncement: {
      readonly announcement: PalletAllianceCid;
    } & Struct;
    readonly isJoinAlliance: boolean;
    readonly isNominateAlly: boolean;
    readonly asNominateAlly: {
      readonly who: MultiAddress;
    } & Struct;
    readonly isElevateAlly: boolean;
    readonly asElevateAlly: {
      readonly ally: MultiAddress;
    } & Struct;
    readonly isGiveRetirementNotice: boolean;
    readonly isRetire: boolean;
    readonly isKickMember: boolean;
    readonly asKickMember: {
      readonly who: MultiAddress;
    } & Struct;
    readonly isAddUnscrupulousItems: boolean;
    readonly asAddUnscrupulousItems: {
      readonly items: Vec<PalletAllianceUnscrupulousItem>;
    } & Struct;
    readonly isRemoveUnscrupulousItems: boolean;
    readonly asRemoveUnscrupulousItems: {
      readonly items: Vec<PalletAllianceUnscrupulousItem>;
    } & Struct;
    readonly isClose: boolean;
    readonly asClose: {
      readonly proposalHash: H256;
      readonly index: Compact<u32>;
      readonly proposalWeightBound: SpWeightsWeightV2Weight;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly isAbdicateFellowStatus: boolean;
    readonly type: 'Propose' | 'Vote' | 'InitMembers' | 'Disband' | 'SetRule' | 'Announce' | 'RemoveAnnouncement' | 'JoinAlliance' | 'NominateAlly' | 'ElevateAlly' | 'GiveRetirementNotice' | 'Retire' | 'KickMember' | 'AddUnscrupulousItems' | 'RemoveUnscrupulousItems' | 'Close' | 'AbdicateFellowStatus';
  }

  /** @name PalletAllianceDisbandWitness (400) */
  interface PalletAllianceDisbandWitness extends Struct {
    readonly fellowMembers: Compact<u32>;
    readonly allyMembers: Compact<u32>;
  }

  /** @name PalletAllianceCid (401) */
  interface PalletAllianceCid extends Struct {
    readonly version: PalletAllianceVersion;
    readonly codec: u64;
    readonly hash_: PalletAllianceMultihash;
  }

  /** @name PalletAllianceVersion (402) */
  interface PalletAllianceVersion extends Enum {
    readonly isV0: boolean;
    readonly isV1: boolean;
    readonly type: 'V0' | 'V1';
  }

  /** @name PalletAllianceMultihash (403) */
  interface PalletAllianceMultihash extends Struct {
    readonly code: u64;
    readonly digest: Bytes;
  }

  /** @name PalletAllianceUnscrupulousItem (406) */
  interface PalletAllianceUnscrupulousItem extends Enum {
    readonly isAccountId: boolean;
    readonly asAccountId: AccountId32;
    readonly isWebsite: boolean;
    readonly asWebsite: Bytes;
    readonly type: 'AccountId' | 'Website';
  }

  /** @name PalletNominationPoolsCall (408) */
  interface PalletNominationPoolsCall extends Enum {
    readonly isJoin: boolean;
    readonly asJoin: {
      readonly amount: Compact<u128>;
      readonly poolId: u32;
    } & Struct;
    readonly isBondExtra: boolean;
    readonly asBondExtra: {
      readonly extra: PalletNominationPoolsBondExtra;
    } & Struct;
    readonly isClaimPayout: boolean;
    readonly isUnbond: boolean;
    readonly asUnbond: {
      readonly memberAccount: MultiAddress;
      readonly unbondingPoints: Compact<u128>;
    } & Struct;
    readonly isPoolWithdrawUnbonded: boolean;
    readonly asPoolWithdrawUnbonded: {
      readonly poolId: u32;
      readonly numSlashingSpans: u32;
    } & Struct;
    readonly isWithdrawUnbonded: boolean;
    readonly asWithdrawUnbonded: {
      readonly memberAccount: MultiAddress;
      readonly numSlashingSpans: u32;
    } & Struct;
    readonly isCreate: boolean;
    readonly asCreate: {
      readonly amount: Compact<u128>;
      readonly root: MultiAddress;
      readonly nominator: MultiAddress;
      readonly bouncer: MultiAddress;
    } & Struct;
    readonly isCreateWithPoolId: boolean;
    readonly asCreateWithPoolId: {
      readonly amount: Compact<u128>;
      readonly root: MultiAddress;
      readonly nominator: MultiAddress;
      readonly bouncer: MultiAddress;
      readonly poolId: u32;
    } & Struct;
    readonly isNominate: boolean;
    readonly asNominate: {
      readonly poolId: u32;
      readonly validators: Vec<AccountId32>;
    } & Struct;
    readonly isSetState: boolean;
    readonly asSetState: {
      readonly poolId: u32;
      readonly state: PalletNominationPoolsPoolState;
    } & Struct;
    readonly isSetMetadata: boolean;
    readonly asSetMetadata: {
      readonly poolId: u32;
      readonly metadata: Bytes;
    } & Struct;
    readonly isSetConfigs: boolean;
    readonly asSetConfigs: {
      readonly minJoinBond: PalletNominationPoolsConfigOpU128;
      readonly minCreateBond: PalletNominationPoolsConfigOpU128;
      readonly maxPools: PalletNominationPoolsConfigOpU32;
      readonly maxMembers: PalletNominationPoolsConfigOpU32;
      readonly maxMembersPerPool: PalletNominationPoolsConfigOpU32;
      readonly globalMaxCommission: PalletNominationPoolsConfigOpPerbill;
    } & Struct;
    readonly isUpdateRoles: boolean;
    readonly asUpdateRoles: {
      readonly poolId: u32;
      readonly newRoot: PalletNominationPoolsConfigOpAccountId32;
      readonly newNominator: PalletNominationPoolsConfigOpAccountId32;
      readonly newBouncer: PalletNominationPoolsConfigOpAccountId32;
    } & Struct;
    readonly isChill: boolean;
    readonly asChill: {
      readonly poolId: u32;
    } & Struct;
    readonly isBondExtraOther: boolean;
    readonly asBondExtraOther: {
      readonly member: MultiAddress;
      readonly extra: PalletNominationPoolsBondExtra;
    } & Struct;
    readonly isSetClaimPermission: boolean;
    readonly asSetClaimPermission: {
      readonly permission: PalletNominationPoolsClaimPermission;
    } & Struct;
    readonly isClaimPayoutOther: boolean;
    readonly asClaimPayoutOther: {
      readonly other: AccountId32;
    } & Struct;
    readonly isSetCommission: boolean;
    readonly asSetCommission: {
      readonly poolId: u32;
      readonly newCommission: Option<ITuple<[Perbill, AccountId32]>>;
    } & Struct;
    readonly isSetCommissionMax: boolean;
    readonly asSetCommissionMax: {
      readonly poolId: u32;
      readonly maxCommission: Perbill;
    } & Struct;
    readonly isSetCommissionChangeRate: boolean;
    readonly asSetCommissionChangeRate: {
      readonly poolId: u32;
      readonly changeRate: PalletNominationPoolsCommissionChangeRate;
    } & Struct;
    readonly isClaimCommission: boolean;
    readonly asClaimCommission: {
      readonly poolId: u32;
    } & Struct;
    readonly isAdjustPoolDeposit: boolean;
    readonly asAdjustPoolDeposit: {
      readonly poolId: u32;
    } & Struct;
    readonly isSetCommissionClaimPermission: boolean;
    readonly asSetCommissionClaimPermission: {
      readonly poolId: u32;
      readonly permission: Option<PalletNominationPoolsCommissionClaimPermission>;
    } & Struct;
    readonly isApplySlash: boolean;
    readonly asApplySlash: {
      readonly memberAccount: MultiAddress;
    } & Struct;
    readonly isMigrateDelegation: boolean;
    readonly asMigrateDelegation: {
      readonly memberAccount: MultiAddress;
    } & Struct;
    readonly isMigratePoolToDelegateStake: boolean;
    readonly asMigratePoolToDelegateStake: {
      readonly poolId: u32;
    } & Struct;
    readonly type: 'Join' | 'BondExtra' | 'ClaimPayout' | 'Unbond' | 'PoolWithdrawUnbonded' | 'WithdrawUnbonded' | 'Create' | 'CreateWithPoolId' | 'Nominate' | 'SetState' | 'SetMetadata' | 'SetConfigs' | 'UpdateRoles' | 'Chill' | 'BondExtraOther' | 'SetClaimPermission' | 'ClaimPayoutOther' | 'SetCommission' | 'SetCommissionMax' | 'SetCommissionChangeRate' | 'ClaimCommission' | 'AdjustPoolDeposit' | 'SetCommissionClaimPermission' | 'ApplySlash' | 'MigrateDelegation' | 'MigratePoolToDelegateStake';
  }

  /** @name PalletNominationPoolsBondExtra (409) */
  interface PalletNominationPoolsBondExtra extends Enum {
    readonly isFreeBalance: boolean;
    readonly asFreeBalance: u128;
    readonly isRewards: boolean;
    readonly type: 'FreeBalance' | 'Rewards';
  }

  /** @name PalletNominationPoolsPoolState (410) */
  interface PalletNominationPoolsPoolState extends Enum {
    readonly isOpen: boolean;
    readonly isBlocked: boolean;
    readonly isDestroying: boolean;
    readonly type: 'Open' | 'Blocked' | 'Destroying';
  }

  /** @name PalletNominationPoolsConfigOpU128 (411) */
  interface PalletNominationPoolsConfigOpU128 extends Enum {
    readonly isNoop: boolean;
    readonly isSet: boolean;
    readonly asSet: u128;
    readonly isRemove: boolean;
    readonly type: 'Noop' | 'Set' | 'Remove';
  }

  /** @name PalletNominationPoolsConfigOpU32 (412) */
  interface PalletNominationPoolsConfigOpU32 extends Enum {
    readonly isNoop: boolean;
    readonly isSet: boolean;
    readonly asSet: u32;
    readonly isRemove: boolean;
    readonly type: 'Noop' | 'Set' | 'Remove';
  }

  /** @name PalletNominationPoolsConfigOpPerbill (413) */
  interface PalletNominationPoolsConfigOpPerbill extends Enum {
    readonly isNoop: boolean;
    readonly isSet: boolean;
    readonly asSet: Perbill;
    readonly isRemove: boolean;
    readonly type: 'Noop' | 'Set' | 'Remove';
  }

  /** @name PalletNominationPoolsConfigOpAccountId32 (414) */
  interface PalletNominationPoolsConfigOpAccountId32 extends Enum {
    readonly isNoop: boolean;
    readonly isSet: boolean;
    readonly asSet: AccountId32;
    readonly isRemove: boolean;
    readonly type: 'Noop' | 'Set' | 'Remove';
  }

  /** @name PalletNominationPoolsClaimPermission (415) */
  interface PalletNominationPoolsClaimPermission extends Enum {
    readonly isPermissioned: boolean;
    readonly isPermissionlessCompound: boolean;
    readonly isPermissionlessWithdraw: boolean;
    readonly isPermissionlessAll: boolean;
    readonly type: 'Permissioned' | 'PermissionlessCompound' | 'PermissionlessWithdraw' | 'PermissionlessAll';
  }

  /** @name PalletNominationPoolsCommissionChangeRate (418) */
  interface PalletNominationPoolsCommissionChangeRate extends Struct {
    readonly maxIncrease: Perbill;
    readonly minDelay: u32;
  }

  /** @name PalletNominationPoolsCommissionClaimPermission (420) */
  interface PalletNominationPoolsCommissionClaimPermission extends Enum {
    readonly isPermissionless: boolean;
    readonly isAccount: boolean;
    readonly asAccount: AccountId32;
    readonly type: 'Permissionless' | 'Account';
  }

  /** @name PalletRankedCollectiveCall (422) */
  interface PalletRankedCollectiveCall extends Enum {
    readonly isAddMember: boolean;
    readonly asAddMember: {
      readonly who: MultiAddress;
    } & Struct;
    readonly isPromoteMember: boolean;
    readonly asPromoteMember: {
      readonly who: MultiAddress;
    } & Struct;
    readonly isDemoteMember: boolean;
    readonly asDemoteMember: {
      readonly who: MultiAddress;
    } & Struct;
    readonly isRemoveMember: boolean;
    readonly asRemoveMember: {
      readonly who: MultiAddress;
      readonly minRank: u16;
    } & Struct;
    readonly isVote: boolean;
    readonly asVote: {
      readonly poll: u32;
      readonly aye: bool;
    } & Struct;
    readonly isCleanupPoll: boolean;
    readonly asCleanupPoll: {
      readonly pollIndex: u32;
      readonly max: u32;
    } & Struct;
    readonly isExchangeMember: boolean;
    readonly asExchangeMember: {
      readonly who: MultiAddress;
      readonly newWho: MultiAddress;
    } & Struct;
    readonly type: 'AddMember' | 'PromoteMember' | 'DemoteMember' | 'RemoveMember' | 'Vote' | 'CleanupPoll' | 'ExchangeMember';
  }

  /** @name PalletAssetConversionCall (423) */
  interface PalletAssetConversionCall extends Enum {
    readonly isCreatePool: boolean;
    readonly asCreatePool: {
      readonly asset1: FrameSupportTokensFungibleUnionOfNativeOrWithId;
      readonly asset2: FrameSupportTokensFungibleUnionOfNativeOrWithId;
    } & Struct;
    readonly isAddLiquidity: boolean;
    readonly asAddLiquidity: {
      readonly asset1: FrameSupportTokensFungibleUnionOfNativeOrWithId;
      readonly asset2: FrameSupportTokensFungibleUnionOfNativeOrWithId;
      readonly amount1Desired: u128;
      readonly amount2Desired: u128;
      readonly amount1Min: u128;
      readonly amount2Min: u128;
      readonly mintTo: AccountId32;
    } & Struct;
    readonly isRemoveLiquidity: boolean;
    readonly asRemoveLiquidity: {
      readonly asset1: FrameSupportTokensFungibleUnionOfNativeOrWithId;
      readonly asset2: FrameSupportTokensFungibleUnionOfNativeOrWithId;
      readonly lpTokenBurn: u128;
      readonly amount1MinReceive: u128;
      readonly amount2MinReceive: u128;
      readonly withdrawTo: AccountId32;
    } & Struct;
    readonly isSwapExactTokensForTokens: boolean;
    readonly asSwapExactTokensForTokens: {
      readonly path: Vec<FrameSupportTokensFungibleUnionOfNativeOrWithId>;
      readonly amountIn: u128;
      readonly amountOutMin: u128;
      readonly sendTo: AccountId32;
      readonly keepAlive: bool;
    } & Struct;
    readonly isSwapTokensForExactTokens: boolean;
    readonly asSwapTokensForExactTokens: {
      readonly path: Vec<FrameSupportTokensFungibleUnionOfNativeOrWithId>;
      readonly amountOut: u128;
      readonly amountInMax: u128;
      readonly sendTo: AccountId32;
      readonly keepAlive: bool;
    } & Struct;
    readonly isTouch: boolean;
    readonly asTouch: {
      readonly asset1: FrameSupportTokensFungibleUnionOfNativeOrWithId;
      readonly asset2: FrameSupportTokensFungibleUnionOfNativeOrWithId;
    } & Struct;
    readonly type: 'CreatePool' | 'AddLiquidity' | 'RemoveLiquidity' | 'SwapExactTokensForTokens' | 'SwapTokensForExactTokens' | 'Touch';
  }

  /** @name PalletFastUnstakeCall (425) */
  interface PalletFastUnstakeCall extends Enum {
    readonly isRegisterFastUnstake: boolean;
    readonly isDeregister: boolean;
    readonly isControl: boolean;
    readonly asControl: {
      readonly erasToCheck: u32;
    } & Struct;
    readonly type: 'RegisterFastUnstake' | 'Deregister' | 'Control';
  }

  /** @name PalletMessageQueueCall (426) */
  interface PalletMessageQueueCall extends Enum {
    readonly isReapPage: boolean;
    readonly asReapPage: {
      readonly messageOrigin: u32;
      readonly pageIndex: u32;
    } & Struct;
    readonly isExecuteOverweight: boolean;
    readonly asExecuteOverweight: {
      readonly messageOrigin: u32;
      readonly page: u32;
      readonly index: u32;
      readonly weightLimit: SpWeightsWeightV2Weight;
    } & Struct;
    readonly type: 'ReapPage' | 'ExecuteOverweight';
  }

  /** @name FrameBenchmarkingPalletPovCall (427) */
  interface FrameBenchmarkingPalletPovCall extends Enum {
    readonly isEmitEvent: boolean;
    readonly isNoop: boolean;
    readonly type: 'EmitEvent' | 'Noop';
  }

  /** @name PalletTxPauseCall (428) */
  interface PalletTxPauseCall extends Enum {
    readonly isPause: boolean;
    readonly asPause: {
      readonly fullName: ITuple<[Bytes, Bytes]>;
    } & Struct;
    readonly isUnpause: boolean;
    readonly asUnpause: {
      readonly ident: ITuple<[Bytes, Bytes]>;
    } & Struct;
    readonly type: 'Pause' | 'Unpause';
  }

  /** @name PalletSafeModeCall (430) */
  interface PalletSafeModeCall extends Enum {
    readonly isEnter: boolean;
    readonly isForceEnter: boolean;
    readonly isExtend: boolean;
    readonly isForceExtend: boolean;
    readonly isForceExit: boolean;
    readonly isForceSlashDeposit: boolean;
    readonly asForceSlashDeposit: {
      readonly account: AccountId32;
      readonly block: u32;
    } & Struct;
    readonly isReleaseDeposit: boolean;
    readonly asReleaseDeposit: {
      readonly account: AccountId32;
      readonly block: u32;
    } & Struct;
    readonly isForceReleaseDeposit: boolean;
    readonly asForceReleaseDeposit: {
      readonly account: AccountId32;
      readonly block: u32;
    } & Struct;
    readonly type: 'Enter' | 'ForceEnter' | 'Extend' | 'ForceExtend' | 'ForceExit' | 'ForceSlashDeposit' | 'ReleaseDeposit' | 'ForceReleaseDeposit';
  }

  /** @name PalletMigrationsCall (431) */
  interface PalletMigrationsCall extends Enum {
    readonly isForceSetCursor: boolean;
    readonly asForceSetCursor: {
      readonly cursor: Option<PalletMigrationsMigrationCursor>;
    } & Struct;
    readonly isForceSetActiveCursor: boolean;
    readonly asForceSetActiveCursor: {
      readonly index: u32;
      readonly innerCursor: Option<Bytes>;
      readonly startedAt: Option<u32>;
    } & Struct;
    readonly isForceOnboardMbms: boolean;
    readonly isClearHistoric: boolean;
    readonly asClearHistoric: {
      readonly selector: PalletMigrationsHistoricCleanupSelector;
    } & Struct;
    readonly type: 'ForceSetCursor' | 'ForceSetActiveCursor' | 'ForceOnboardMbms' | 'ClearHistoric';
  }

  /** @name PalletMigrationsMigrationCursor (433) */
  interface PalletMigrationsMigrationCursor extends Enum {
    readonly isActive: boolean;
    readonly asActive: PalletMigrationsActiveCursor;
    readonly isStuck: boolean;
    readonly type: 'Active' | 'Stuck';
  }

  /** @name PalletMigrationsActiveCursor (435) */
  interface PalletMigrationsActiveCursor extends Struct {
    readonly index: u32;
    readonly innerCursor: Option<Bytes>;
    readonly startedAt: u32;
  }

  /** @name PalletMigrationsHistoricCleanupSelector (437) */
  interface PalletMigrationsHistoricCleanupSelector extends Enum {
    readonly isSpecific: boolean;
    readonly asSpecific: Vec<Bytes>;
    readonly isWildcard: boolean;
    readonly asWildcard: {
      readonly limit: Option<u32>;
      readonly previousCursor: Option<Bytes>;
    } & Struct;
    readonly type: 'Specific' | 'Wildcard';
  }

  /** @name PalletBrokerCall (440) */
  interface PalletBrokerCall extends Enum {
    readonly isConfigure: boolean;
    readonly asConfigure: {
      readonly config: PalletBrokerConfigRecord;
    } & Struct;
    readonly isReserve: boolean;
    readonly asReserve: {
      readonly workload: Vec<PalletBrokerScheduleItem>;
    } & Struct;
    readonly isUnreserve: boolean;
    readonly asUnreserve: {
      readonly itemIndex: u32;
    } & Struct;
    readonly isSetLease: boolean;
    readonly asSetLease: {
      readonly task: u32;
      readonly until: u32;
    } & Struct;
    readonly isStartSales: boolean;
    readonly asStartSales: {
      readonly endPrice: u128;
      readonly extraCores: u16;
    } & Struct;
    readonly isPurchase: boolean;
    readonly asPurchase: {
      readonly priceLimit: u128;
    } & Struct;
    readonly isRenew: boolean;
    readonly asRenew: {
      readonly core: u16;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly regionId: PalletBrokerRegionId;
      readonly newOwner: AccountId32;
    } & Struct;
    readonly isPartition: boolean;
    readonly asPartition: {
      readonly regionId: PalletBrokerRegionId;
      readonly pivot: u32;
    } & Struct;
    readonly isInterlace: boolean;
    readonly asInterlace: {
      readonly regionId: PalletBrokerRegionId;
      readonly pivot: PalletBrokerCoreMask;
    } & Struct;
    readonly isAssign: boolean;
    readonly asAssign: {
      readonly regionId: PalletBrokerRegionId;
      readonly task: u32;
      readonly finality: PalletBrokerFinality;
    } & Struct;
    readonly isPool: boolean;
    readonly asPool: {
      readonly regionId: PalletBrokerRegionId;
      readonly payee: AccountId32;
      readonly finality: PalletBrokerFinality;
    } & Struct;
    readonly isClaimRevenue: boolean;
    readonly asClaimRevenue: {
      readonly regionId: PalletBrokerRegionId;
      readonly maxTimeslices: u32;
    } & Struct;
    readonly isPurchaseCredit: boolean;
    readonly asPurchaseCredit: {
      readonly amount: u128;
      readonly beneficiary: AccountId32;
    } & Struct;
    readonly isDropRegion: boolean;
    readonly asDropRegion: {
      readonly regionId: PalletBrokerRegionId;
    } & Struct;
    readonly isDropContribution: boolean;
    readonly asDropContribution: {
      readonly regionId: PalletBrokerRegionId;
    } & Struct;
    readonly isDropHistory: boolean;
    readonly asDropHistory: {
      readonly when: u32;
    } & Struct;
    readonly isDropRenewal: boolean;
    readonly asDropRenewal: {
      readonly core: u16;
      readonly when: u32;
    } & Struct;
    readonly isRequestCoreCount: boolean;
    readonly asRequestCoreCount: {
      readonly coreCount: u16;
    } & Struct;
    readonly isNotifyCoreCount: boolean;
    readonly asNotifyCoreCount: {
      readonly coreCount: u16;
    } & Struct;
    readonly isNotifyRevenue: boolean;
    readonly asNotifyRevenue: {
      readonly revenue: PalletBrokerOnDemandRevenueRecord;
    } & Struct;
    readonly isEnableAutoRenew: boolean;
    readonly asEnableAutoRenew: {
      readonly core: u16;
      readonly task: u32;
      readonly workloadEndHint: Option<u32>;
    } & Struct;
    readonly isDisableAutoRenew: boolean;
    readonly asDisableAutoRenew: {
      readonly core: u16;
      readonly task: u32;
    } & Struct;
    readonly isForceReserve: boolean;
    readonly asForceReserve: {
      readonly workload: Vec<PalletBrokerScheduleItem>;
      readonly core: u16;
    } & Struct;
    readonly isRemoveLease: boolean;
    readonly asRemoveLease: {
      readonly task: u32;
    } & Struct;
    readonly isRemoveAssignment: boolean;
    readonly asRemoveAssignment: {
      readonly regionId: PalletBrokerRegionId;
    } & Struct;
    readonly isSwapLeases: boolean;
    readonly asSwapLeases: {
      readonly id: u32;
      readonly other: u32;
    } & Struct;
    readonly type: 'Configure' | 'Reserve' | 'Unreserve' | 'SetLease' | 'StartSales' | 'Purchase' | 'Renew' | 'Transfer' | 'Partition' | 'Interlace' | 'Assign' | 'Pool' | 'ClaimRevenue' | 'PurchaseCredit' | 'DropRegion' | 'DropContribution' | 'DropHistory' | 'DropRenewal' | 'RequestCoreCount' | 'NotifyCoreCount' | 'NotifyRevenue' | 'EnableAutoRenew' | 'DisableAutoRenew' | 'ForceReserve' | 'RemoveLease' | 'RemoveAssignment' | 'SwapLeases';
  }

  /** @name PalletBrokerConfigRecord (441) */
  interface PalletBrokerConfigRecord extends Struct {
    readonly advanceNotice: u32;
    readonly interludeLength: u32;
    readonly leadinLength: u32;
    readonly regionLength: u32;
    readonly idealBulkProportion: Perbill;
    readonly limitCoresOffered: Option<u16>;
    readonly renewalBump: Perbill;
    readonly contributionTimeout: u32;
  }

  /** @name PalletBrokerScheduleItem (443) */
  interface PalletBrokerScheduleItem extends Struct {
    readonly mask: PalletBrokerCoreMask;
    readonly assignment: PalletBrokerCoretimeInterfaceCoreAssignment;
  }

  /** @name PalletBrokerCoreMask (444) */
  interface PalletBrokerCoreMask extends U8aFixed {}

  /** @name PalletBrokerCoretimeInterfaceCoreAssignment (445) */
  interface PalletBrokerCoretimeInterfaceCoreAssignment extends Enum {
    readonly isIdle: boolean;
    readonly isPool: boolean;
    readonly isTask: boolean;
    readonly asTask: u32;
    readonly type: 'Idle' | 'Pool' | 'Task';
  }

  /** @name PalletBrokerRegionId (447) */
  interface PalletBrokerRegionId extends Struct {
    readonly begin: u32;
    readonly core: u16;
    readonly mask: PalletBrokerCoreMask;
  }

  /** @name PalletBrokerFinality (448) */
  interface PalletBrokerFinality extends Enum {
    readonly isProvisional: boolean;
    readonly isFinal: boolean;
    readonly type: 'Provisional' | 'Final';
  }

  /** @name PalletBrokerOnDemandRevenueRecord (449) */
  interface PalletBrokerOnDemandRevenueRecord extends Struct {
    readonly until: u32;
    readonly amount: u128;
  }

  /** @name PalletMixnetCall (450) */
  interface PalletMixnetCall extends Enum {
    readonly isRegister: boolean;
    readonly asRegister: {
      readonly registration: PalletMixnetRegistration;
      readonly signature: SpMixnetAppSignature;
    } & Struct;
    readonly type: 'Register';
  }

  /** @name PalletMixnetRegistration (451) */
  interface PalletMixnetRegistration extends Struct {
    readonly blockNumber: u32;
    readonly sessionIndex: u32;
    readonly authorityIndex: u32;
    readonly mixnode: PalletMixnetBoundedMixnode;
  }

  /** @name PalletMixnetBoundedMixnode (452) */
  interface PalletMixnetBoundedMixnode extends Struct {
    readonly kxPublic: U8aFixed;
    readonly peerId: U8aFixed;
    readonly externalAddresses: Vec<Bytes>;
  }

  /** @name SpMixnetAppSignature (455) */
  interface SpMixnetAppSignature extends U8aFixed {}

  /** @name PalletParametersCall (456) */
  interface PalletParametersCall extends Enum {
    readonly isSetParameter: boolean;
    readonly asSetParameter: {
      readonly keyValue: KitchensinkRuntimeRuntimeParameters;
    } & Struct;
    readonly type: 'SetParameter';
  }

  /** @name KitchensinkRuntimeRuntimeParameters (457) */
  interface KitchensinkRuntimeRuntimeParameters extends Enum {
    readonly isStorage: boolean;
    readonly asStorage: KitchensinkRuntimeDynamicParamsStorageParameters;
    readonly isReferenda: boolean;
    readonly asReferenda: KitchensinkRuntimeDynamicParamsReferendaParameters;
    readonly type: 'Storage' | 'Referenda';
  }

  /** @name KitchensinkRuntimeDynamicParamsStorageParameters (458) */
  interface KitchensinkRuntimeDynamicParamsStorageParameters extends Enum {
    readonly isBaseDeposit: boolean;
    readonly asBaseDeposit: ITuple<[KitchensinkRuntimeDynamicParamsStorageBaseDeposit, Option<u128>]>;
    readonly isByteDeposit: boolean;
    readonly asByteDeposit: ITuple<[KitchensinkRuntimeDynamicParamsStorageByteDeposit, Option<u128>]>;
    readonly type: 'BaseDeposit' | 'ByteDeposit';
  }

  /** @name KitchensinkRuntimeDynamicParamsStorageBaseDeposit (459) */
  type KitchensinkRuntimeDynamicParamsStorageBaseDeposit = Null;

  /** @name KitchensinkRuntimeDynamicParamsStorageByteDeposit (460) */
  type KitchensinkRuntimeDynamicParamsStorageByteDeposit = Null;

  /** @name KitchensinkRuntimeDynamicParamsReferendaParameters (461) */
  interface KitchensinkRuntimeDynamicParamsReferendaParameters extends Enum {
    readonly isTracks: boolean;
    readonly asTracks: ITuple<[KitchensinkRuntimeDynamicParamsReferendaTracks, Option<Vec<PalletReferendaTrack>>]>;
    readonly isOrigins: boolean;
    readonly asOrigins: ITuple<[KitchensinkRuntimeDynamicParamsReferendaOrigins, Option<Vec<ITuple<[KitchensinkRuntimeOriginCaller, u16]>>>]>;
    readonly type: 'Tracks' | 'Origins';
  }

  /** @name KitchensinkRuntimeDynamicParamsReferendaTracks (462) */
  type KitchensinkRuntimeDynamicParamsReferendaTracks = Null;

  /** @name PalletReferendaTrack (465) */
  interface PalletReferendaTrack extends Struct {
    readonly id: u16;
    readonly info: {
      readonly name: U8aFixed;
      readonly maxDeciding: u32;
      readonly decisionDeposit: u128;
      readonly preparePeriod: u32;
      readonly decisionPeriod: u32;
      readonly confirmPeriod: u32;
      readonly minEnactmentPeriod: u32;
      readonly minApproval: PalletReferendaCurve;
      readonly minSupport: PalletReferendaCurve;
    } & Struct;
  }

  /** @name PalletReferendaCurve (467) */
  interface PalletReferendaCurve extends Enum {
    readonly isLinearDecreasing: boolean;
    readonly asLinearDecreasing: {
      readonly length: Perbill;
      readonly floor: Perbill;
      readonly ceil: Perbill;
    } & Struct;
    readonly isSteppedDecreasing: boolean;
    readonly asSteppedDecreasing: {
      readonly begin: Perbill;
      readonly end: Perbill;
      readonly step: Perbill;
      readonly period: Perbill;
    } & Struct;
    readonly isReciprocal: boolean;
    readonly asReciprocal: {
      readonly factor: i64;
      readonly xOffset: i64;
      readonly yOffset: i64;
    } & Struct;
    readonly type: 'LinearDecreasing' | 'SteppedDecreasing' | 'Reciprocal';
  }

  /** @name KitchensinkRuntimeDynamicParamsReferendaOrigins (471) */
  type KitchensinkRuntimeDynamicParamsReferendaOrigins = Null;

  /** @name PalletAssetConversionOpsCall (476) */
  interface PalletAssetConversionOpsCall extends Enum {
    readonly isMigrateToNewAccount: boolean;
    readonly asMigrateToNewAccount: {
      readonly asset1: FrameSupportTokensFungibleUnionOfNativeOrWithId;
      readonly asset2: FrameSupportTokensFungibleUnionOfNativeOrWithId;
    } & Struct;
    readonly type: 'MigrateToNewAccount';
  }

  /** @name PalletReviveCall (477) */
  interface PalletReviveCall extends Enum {
    readonly isEthTransact: boolean;
    readonly asEthTransact: {
      readonly payload: Bytes;
    } & Struct;
    readonly isCall: boolean;
    readonly asCall: {
      readonly dest: H160;
      readonly value: Compact<u128>;
      readonly gasLimit: SpWeightsWeightV2Weight;
      readonly storageDepositLimit: Compact<u128>;
      readonly data: Bytes;
    } & Struct;
    readonly isInstantiate: boolean;
    readonly asInstantiate: {
      readonly value: Compact<u128>;
      readonly gasLimit: SpWeightsWeightV2Weight;
      readonly storageDepositLimit: Compact<u128>;
      readonly codeHash: H256;
      readonly data: Bytes;
      readonly salt: Option<U8aFixed>;
    } & Struct;
    readonly isInstantiateWithCode: boolean;
    readonly asInstantiateWithCode: {
      readonly value: Compact<u128>;
      readonly gasLimit: SpWeightsWeightV2Weight;
      readonly storageDepositLimit: Compact<u128>;
      readonly code: Bytes;
      readonly data: Bytes;
      readonly salt: Option<U8aFixed>;
    } & Struct;
    readonly isUploadCode: boolean;
    readonly asUploadCode: {
      readonly code: Bytes;
      readonly storageDepositLimit: Compact<u128>;
    } & Struct;
    readonly isRemoveCode: boolean;
    readonly asRemoveCode: {
      readonly codeHash: H256;
    } & Struct;
    readonly isSetCode: boolean;
    readonly asSetCode: {
      readonly dest: H160;
      readonly codeHash: H256;
    } & Struct;
    readonly isMapAccount: boolean;
    readonly isUnmapAccount: boolean;
    readonly isDispatchAsFallbackAccount: boolean;
    readonly asDispatchAsFallbackAccount: {
      readonly call: Call;
    } & Struct;
    readonly type: 'EthTransact' | 'Call' | 'Instantiate' | 'InstantiateWithCode' | 'UploadCode' | 'RemoveCode' | 'SetCode' | 'MapAccount' | 'UnmapAccount' | 'DispatchAsFallbackAccount';
  }

  /** @name PalletAssetRewardsCall (479) */
  interface PalletAssetRewardsCall extends Enum {
    readonly isCreatePool: boolean;
    readonly asCreatePool: {
      readonly stakedAssetId: FrameSupportTokensFungibleUnionOfNativeOrWithId;
      readonly rewardAssetId: FrameSupportTokensFungibleUnionOfNativeOrWithId;
      readonly rewardRatePerBlock: u128;
      readonly expiry: FrameSupportScheduleDispatchTime;
      readonly admin: Option<AccountId32>;
    } & Struct;
    readonly isStake: boolean;
    readonly asStake: {
      readonly poolId: u32;
      readonly amount: u128;
    } & Struct;
    readonly isUnstake: boolean;
    readonly asUnstake: {
      readonly poolId: u32;
      readonly amount: u128;
      readonly staker: Option<AccountId32>;
    } & Struct;
    readonly isHarvestRewards: boolean;
    readonly asHarvestRewards: {
      readonly poolId: u32;
      readonly staker: Option<AccountId32>;
    } & Struct;
    readonly isSetPoolRewardRatePerBlock: boolean;
    readonly asSetPoolRewardRatePerBlock: {
      readonly poolId: u32;
      readonly newRewardRatePerBlock: u128;
    } & Struct;
    readonly isSetPoolAdmin: boolean;
    readonly asSetPoolAdmin: {
      readonly poolId: u32;
      readonly newAdmin: AccountId32;
    } & Struct;
    readonly isSetPoolExpiryBlock: boolean;
    readonly asSetPoolExpiryBlock: {
      readonly poolId: u32;
      readonly newExpiry: FrameSupportScheduleDispatchTime;
    } & Struct;
    readonly isDepositRewardTokens: boolean;
    readonly asDepositRewardTokens: {
      readonly poolId: u32;
      readonly amount: u128;
    } & Struct;
    readonly isCleanupPool: boolean;
    readonly asCleanupPool: {
      readonly poolId: u32;
    } & Struct;
    readonly type: 'CreatePool' | 'Stake' | 'Unstake' | 'HarvestRewards' | 'SetPoolRewardRatePerBlock' | 'SetPoolAdmin' | 'SetPoolExpiryBlock' | 'DepositRewardTokens' | 'CleanupPool';
  }

  /** @name PalletMetaTxCall (480) */
  interface PalletMetaTxCall extends Enum {
    readonly isDispatch: boolean;
    readonly asDispatch: {
      readonly metaTx: PalletMetaTxMetaTx;
    } & Struct;
    readonly type: 'Dispatch';
  }

  /** @name PalletMetaTxMetaTx (481) */
  interface PalletMetaTxMetaTx extends Struct {
    readonly call: Call;
    readonly extensionVersion: u8;
    readonly extension: ITuple<[PalletVerifySignatureExtensionVerifySignature, PalletMetaTxExtensionMetaTxMarker, FrameSystemExtensionsCheckNonZeroSender, FrameSystemExtensionsCheckSpecVersion, FrameSystemExtensionsCheckTxVersion, FrameSystemExtensionsCheckGenesis, Era, FrameSystemExtensionsCheckNonce, FrameMetadataHashExtensionCheckMetadataHash]>;
  }

  /** @name PalletVerifySignatureExtensionVerifySignature (483) */
  interface PalletVerifySignatureExtensionVerifySignature extends Enum {
    readonly isSigned: boolean;
    readonly asSigned: {
      readonly signature: SpRuntimeMultiSignature;
      readonly account: AccountId32;
    } & Struct;
    readonly isDisabled: boolean;
    readonly type: 'Signed' | 'Disabled';
  }

  /** @name PalletMetaTxExtensionMetaTxMarker (484) */
  type PalletMetaTxExtensionMetaTxMarker = Null;

  /** @name FrameSystemExtensionsCheckNonZeroSender (485) */
  type FrameSystemExtensionsCheckNonZeroSender = Null;

  /** @name FrameSystemExtensionsCheckSpecVersion (486) */
  type FrameSystemExtensionsCheckSpecVersion = Null;

  /** @name FrameSystemExtensionsCheckTxVersion (487) */
  type FrameSystemExtensionsCheckTxVersion = Null;

  /** @name FrameSystemExtensionsCheckGenesis (488) */
  type FrameSystemExtensionsCheckGenesis = Null;

  /** @name FrameSystemExtensionsCheckNonce (491) */
  interface FrameSystemExtensionsCheckNonce extends Compact<u32> {}

  /** @name FrameMetadataHashExtensionCheckMetadataHash (492) */
  interface FrameMetadataHashExtensionCheckMetadataHash extends Struct {
    readonly mode: FrameMetadataHashExtensionMode;
  }

  /** @name FrameMetadataHashExtensionMode (493) */
  interface FrameMetadataHashExtensionMode extends Enum {
    readonly isDisabled: boolean;
    readonly isEnabled: boolean;
    readonly type: 'Disabled' | 'Enabled';
  }

  /** @name SpRuntimeBlakeTwo256 (494) */
  type SpRuntimeBlakeTwo256 = Null;

  /** @name PalletConvictionVotingTally (495) */
  interface PalletConvictionVotingTally extends Struct {
    readonly ayes: u128;
    readonly nays: u128;
    readonly support: u128;
  }

  /** @name PalletRemarkEvent (496) */
  interface PalletRemarkEvent extends Enum {
    readonly isStored: boolean;
    readonly asStored: {
      readonly sender: AccountId32;
      readonly contentHash: H256;
    } & Struct;
    readonly type: 'Stored';
  }

  /** @name PalletRootTestingEvent (497) */
  interface PalletRootTestingEvent extends Enum {
    readonly isDefensiveTestCall: boolean;
    readonly type: 'DefensiveTestCall';
  }

  /** @name PalletConvictionVotingEvent (498) */
  interface PalletConvictionVotingEvent extends Enum {
    readonly isDelegated: boolean;
    readonly asDelegated: ITuple<[AccountId32, AccountId32]>;
    readonly isUndelegated: boolean;
    readonly asUndelegated: AccountId32;
    readonly isVoted: boolean;
    readonly asVoted: {
      readonly who: AccountId32;
      readonly vote: PalletConvictionVotingVoteAccountVote;
    } & Struct;
    readonly isVoteRemoved: boolean;
    readonly asVoteRemoved: {
      readonly who: AccountId32;
      readonly vote: PalletConvictionVotingVoteAccountVote;
    } & Struct;
    readonly isVoteUnlocked: boolean;
    readonly asVoteUnlocked: {
      readonly who: AccountId32;
      readonly class: u16;
    } & Struct;
    readonly type: 'Delegated' | 'Undelegated' | 'Voted' | 'VoteRemoved' | 'VoteUnlocked';
  }

  /** @name PalletWhitelistEvent (499) */
  interface PalletWhitelistEvent extends Enum {
    readonly isCallWhitelisted: boolean;
    readonly asCallWhitelisted: {
      readonly callHash: H256;
    } & Struct;
    readonly isWhitelistedCallRemoved: boolean;
    readonly asWhitelistedCallRemoved: {
      readonly callHash: H256;
    } & Struct;
    readonly isWhitelistedCallDispatched: boolean;
    readonly asWhitelistedCallDispatched: {
      readonly callHash: H256;
      readonly result: Result<FrameSupportDispatchPostDispatchInfo, SpRuntimeDispatchErrorWithPostInfo>;
    } & Struct;
    readonly type: 'CallWhitelisted' | 'WhitelistedCallRemoved' | 'WhitelistedCallDispatched';
  }

  /** @name FrameSupportDispatchPostDispatchInfo (501) */
  interface FrameSupportDispatchPostDispatchInfo extends Struct {
    readonly actualWeight: Option<SpWeightsWeightV2Weight>;
    readonly paysFee: FrameSupportDispatchPays;
  }

  /** @name SpRuntimeDispatchErrorWithPostInfo (503) */
  interface SpRuntimeDispatchErrorWithPostInfo extends Struct {
    readonly postInfo: FrameSupportDispatchPostDispatchInfo;
    readonly error: SpRuntimeDispatchError;
  }

  /** @name PalletAllianceEvent (505) */
  interface PalletAllianceEvent extends Enum {
    readonly isNewRuleSet: boolean;
    readonly asNewRuleSet: {
      readonly rule: PalletAllianceCid;
    } & Struct;
    readonly isAnnounced: boolean;
    readonly asAnnounced: {
      readonly announcement: PalletAllianceCid;
    } & Struct;
    readonly isAnnouncementRemoved: boolean;
    readonly asAnnouncementRemoved: {
      readonly announcement: PalletAllianceCid;
    } & Struct;
    readonly isMembersInitialized: boolean;
    readonly asMembersInitialized: {
      readonly fellows: Vec<AccountId32>;
      readonly allies: Vec<AccountId32>;
    } & Struct;
    readonly isNewAllyJoined: boolean;
    readonly asNewAllyJoined: {
      readonly ally: AccountId32;
      readonly nominator: Option<AccountId32>;
      readonly reserved: Option<u128>;
    } & Struct;
    readonly isAllyElevated: boolean;
    readonly asAllyElevated: {
      readonly ally: AccountId32;
    } & Struct;
    readonly isMemberRetirementPeriodStarted: boolean;
    readonly asMemberRetirementPeriodStarted: {
      readonly member: AccountId32;
    } & Struct;
    readonly isMemberRetired: boolean;
    readonly asMemberRetired: {
      readonly member: AccountId32;
      readonly unreserved: Option<u128>;
    } & Struct;
    readonly isMemberKicked: boolean;
    readonly asMemberKicked: {
      readonly member: AccountId32;
      readonly slashed: Option<u128>;
    } & Struct;
    readonly isUnscrupulousItemAdded: boolean;
    readonly asUnscrupulousItemAdded: {
      readonly items: Vec<PalletAllianceUnscrupulousItem>;
    } & Struct;
    readonly isUnscrupulousItemRemoved: boolean;
    readonly asUnscrupulousItemRemoved: {
      readonly items: Vec<PalletAllianceUnscrupulousItem>;
    } & Struct;
    readonly isAllianceDisbanded: boolean;
    readonly asAllianceDisbanded: {
      readonly fellowMembers: u32;
      readonly allyMembers: u32;
      readonly unreserved: u32;
    } & Struct;
    readonly isFellowAbdicated: boolean;
    readonly asFellowAbdicated: {
      readonly fellow: AccountId32;
    } & Struct;
    readonly type: 'NewRuleSet' | 'Announced' | 'AnnouncementRemoved' | 'MembersInitialized' | 'NewAllyJoined' | 'AllyElevated' | 'MemberRetirementPeriodStarted' | 'MemberRetired' | 'MemberKicked' | 'UnscrupulousItemAdded' | 'UnscrupulousItemRemoved' | 'AllianceDisbanded' | 'FellowAbdicated';
  }

  /** @name PalletNominationPoolsEvent (506) */
  interface PalletNominationPoolsEvent extends Enum {
    readonly isCreated: boolean;
    readonly asCreated: {
      readonly depositor: AccountId32;
      readonly poolId: u32;
    } & Struct;
    readonly isBonded: boolean;
    readonly asBonded: {
      readonly member: AccountId32;
      readonly poolId: u32;
      readonly bonded: u128;
      readonly joined: bool;
    } & Struct;
    readonly isPaidOut: boolean;
    readonly asPaidOut: {
      readonly member: AccountId32;
      readonly poolId: u32;
      readonly payout: u128;
    } & Struct;
    readonly isUnbonded: boolean;
    readonly asUnbonded: {
      readonly member: AccountId32;
      readonly poolId: u32;
      readonly balance: u128;
      readonly points: u128;
      readonly era: u32;
    } & Struct;
    readonly isWithdrawn: boolean;
    readonly asWithdrawn: {
      readonly member: AccountId32;
      readonly poolId: u32;
      readonly balance: u128;
      readonly points: u128;
    } & Struct;
    readonly isDestroyed: boolean;
    readonly asDestroyed: {
      readonly poolId: u32;
    } & Struct;
    readonly isStateChanged: boolean;
    readonly asStateChanged: {
      readonly poolId: u32;
      readonly newState: PalletNominationPoolsPoolState;
    } & Struct;
    readonly isMemberRemoved: boolean;
    readonly asMemberRemoved: {
      readonly poolId: u32;
      readonly member: AccountId32;
      readonly releasedBalance: u128;
    } & Struct;
    readonly isRolesUpdated: boolean;
    readonly asRolesUpdated: {
      readonly root: Option<AccountId32>;
      readonly bouncer: Option<AccountId32>;
      readonly nominator: Option<AccountId32>;
    } & Struct;
    readonly isPoolSlashed: boolean;
    readonly asPoolSlashed: {
      readonly poolId: u32;
      readonly balance: u128;
    } & Struct;
    readonly isUnbondingPoolSlashed: boolean;
    readonly asUnbondingPoolSlashed: {
      readonly poolId: u32;
      readonly era: u32;
      readonly balance: u128;
    } & Struct;
    readonly isPoolCommissionUpdated: boolean;
    readonly asPoolCommissionUpdated: {
      readonly poolId: u32;
      readonly current: Option<ITuple<[Perbill, AccountId32]>>;
    } & Struct;
    readonly isPoolMaxCommissionUpdated: boolean;
    readonly asPoolMaxCommissionUpdated: {
      readonly poolId: u32;
      readonly maxCommission: Perbill;
    } & Struct;
    readonly isPoolCommissionChangeRateUpdated: boolean;
    readonly asPoolCommissionChangeRateUpdated: {
      readonly poolId: u32;
      readonly changeRate: PalletNominationPoolsCommissionChangeRate;
    } & Struct;
    readonly isPoolCommissionClaimPermissionUpdated: boolean;
    readonly asPoolCommissionClaimPermissionUpdated: {
      readonly poolId: u32;
      readonly permission: Option<PalletNominationPoolsCommissionClaimPermission>;
    } & Struct;
    readonly isPoolCommissionClaimed: boolean;
    readonly asPoolCommissionClaimed: {
      readonly poolId: u32;
      readonly commission: u128;
    } & Struct;
    readonly isMinBalanceDeficitAdjusted: boolean;
    readonly asMinBalanceDeficitAdjusted: {
      readonly poolId: u32;
      readonly amount: u128;
    } & Struct;
    readonly isMinBalanceExcessAdjusted: boolean;
    readonly asMinBalanceExcessAdjusted: {
      readonly poolId: u32;
      readonly amount: u128;
    } & Struct;
    readonly isMemberClaimPermissionUpdated: boolean;
    readonly asMemberClaimPermissionUpdated: {
      readonly member: AccountId32;
      readonly permission: PalletNominationPoolsClaimPermission;
    } & Struct;
    readonly isMetadataUpdated: boolean;
    readonly asMetadataUpdated: {
      readonly poolId: u32;
      readonly caller: AccountId32;
    } & Struct;
    readonly isPoolNominationMade: boolean;
    readonly asPoolNominationMade: {
      readonly poolId: u32;
      readonly caller: AccountId32;
    } & Struct;
    readonly isPoolNominatorChilled: boolean;
    readonly asPoolNominatorChilled: {
      readonly poolId: u32;
      readonly caller: AccountId32;
    } & Struct;
    readonly isGlobalParamsUpdated: boolean;
    readonly asGlobalParamsUpdated: {
      readonly minJoinBond: u128;
      readonly minCreateBond: u128;
      readonly maxPools: Option<u32>;
      readonly maxMembers: Option<u32>;
      readonly maxMembersPerPool: Option<u32>;
      readonly globalMaxCommission: Option<Perbill>;
    } & Struct;
    readonly type: 'Created' | 'Bonded' | 'PaidOut' | 'Unbonded' | 'Withdrawn' | 'Destroyed' | 'StateChanged' | 'MemberRemoved' | 'RolesUpdated' | 'PoolSlashed' | 'UnbondingPoolSlashed' | 'PoolCommissionUpdated' | 'PoolMaxCommissionUpdated' | 'PoolCommissionChangeRateUpdated' | 'PoolCommissionClaimPermissionUpdated' | 'PoolCommissionClaimed' | 'MinBalanceDeficitAdjusted' | 'MinBalanceExcessAdjusted' | 'MemberClaimPermissionUpdated' | 'MetadataUpdated' | 'PoolNominationMade' | 'PoolNominatorChilled' | 'GlobalParamsUpdated';
  }

  /** @name PalletRankedCollectiveTally (509) */
  interface PalletRankedCollectiveTally extends Struct {
    readonly bareAyes: u32;
    readonly ayes: u32;
    readonly nays: u32;
  }

  /** @name PalletRankedCollectiveEvent (510) */
  interface PalletRankedCollectiveEvent extends Enum {
    readonly isMemberAdded: boolean;
    readonly asMemberAdded: {
      readonly who: AccountId32;
    } & Struct;
    readonly isRankChanged: boolean;
    readonly asRankChanged: {
      readonly who: AccountId32;
      readonly rank: u16;
    } & Struct;
    readonly isMemberRemoved: boolean;
    readonly asMemberRemoved: {
      readonly who: AccountId32;
      readonly rank: u16;
    } & Struct;
    readonly isVoted: boolean;
    readonly asVoted: {
      readonly who: AccountId32;
      readonly poll: u32;
      readonly vote: PalletRankedCollectiveVoteRecord;
      readonly tally: PalletRankedCollectiveTally;
    } & Struct;
    readonly isMemberExchanged: boolean;
    readonly asMemberExchanged: {
      readonly who: AccountId32;
      readonly newWho: AccountId32;
    } & Struct;
    readonly type: 'MemberAdded' | 'RankChanged' | 'MemberRemoved' | 'Voted' | 'MemberExchanged';
  }

  /** @name PalletRankedCollectiveVoteRecord (511) */
  interface PalletRankedCollectiveVoteRecord extends Enum {
    readonly isAye: boolean;
    readonly asAye: u32;
    readonly isNay: boolean;
    readonly asNay: u32;
    readonly type: 'Aye' | 'Nay';
  }

  /** @name PalletAssetConversionEvent (512) */
  interface PalletAssetConversionEvent extends Enum {
    readonly isPoolCreated: boolean;
    readonly asPoolCreated: {
      readonly creator: AccountId32;
      readonly poolId: ITuple<[FrameSupportTokensFungibleUnionOfNativeOrWithId, FrameSupportTokensFungibleUnionOfNativeOrWithId]>;
      readonly poolAccount: AccountId32;
      readonly lpToken: u32;
    } & Struct;
    readonly isLiquidityAdded: boolean;
    readonly asLiquidityAdded: {
      readonly who: AccountId32;
      readonly mintTo: AccountId32;
      readonly poolId: ITuple<[FrameSupportTokensFungibleUnionOfNativeOrWithId, FrameSupportTokensFungibleUnionOfNativeOrWithId]>;
      readonly amount1Provided: u128;
      readonly amount2Provided: u128;
      readonly lpToken: u32;
      readonly lpTokenMinted: u128;
    } & Struct;
    readonly isLiquidityRemoved: boolean;
    readonly asLiquidityRemoved: {
      readonly who: AccountId32;
      readonly withdrawTo: AccountId32;
      readonly poolId: ITuple<[FrameSupportTokensFungibleUnionOfNativeOrWithId, FrameSupportTokensFungibleUnionOfNativeOrWithId]>;
      readonly amount1: u128;
      readonly amount2: u128;
      readonly lpToken: u32;
      readonly lpTokenBurned: u128;
      readonly withdrawalFee: Permill;
    } & Struct;
    readonly isSwapExecuted: boolean;
    readonly asSwapExecuted: {
      readonly who: AccountId32;
      readonly sendTo: AccountId32;
      readonly amountIn: u128;
      readonly amountOut: u128;
      readonly path: Vec<ITuple<[FrameSupportTokensFungibleUnionOfNativeOrWithId, u128]>>;
    } & Struct;
    readonly isSwapCreditExecuted: boolean;
    readonly asSwapCreditExecuted: {
      readonly amountIn: u128;
      readonly amountOut: u128;
      readonly path: Vec<ITuple<[FrameSupportTokensFungibleUnionOfNativeOrWithId, u128]>>;
    } & Struct;
    readonly isTouched: boolean;
    readonly asTouched: {
      readonly poolId: ITuple<[FrameSupportTokensFungibleUnionOfNativeOrWithId, FrameSupportTokensFungibleUnionOfNativeOrWithId]>;
      readonly who: AccountId32;
    } & Struct;
    readonly type: 'PoolCreated' | 'LiquidityAdded' | 'LiquidityRemoved' | 'SwapExecuted' | 'SwapCreditExecuted' | 'Touched';
  }

  /** @name PalletFastUnstakeEvent (517) */
  interface PalletFastUnstakeEvent extends Enum {
    readonly isUnstaked: boolean;
    readonly asUnstaked: {
      readonly stash: AccountId32;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isSlashed: boolean;
    readonly asSlashed: {
      readonly stash: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isBatchChecked: boolean;
    readonly asBatchChecked: {
      readonly eras: Vec<u32>;
    } & Struct;
    readonly isBatchFinished: boolean;
    readonly asBatchFinished: {
      readonly size_: u32;
    } & Struct;
    readonly isInternalError: boolean;
    readonly type: 'Unstaked' | 'Slashed' | 'BatchChecked' | 'BatchFinished' | 'InternalError';
  }

  /** @name PalletMessageQueueEvent (518) */
  interface PalletMessageQueueEvent extends Enum {
    readonly isProcessingFailed: boolean;
    readonly asProcessingFailed: {
      readonly id: H256;
      readonly origin: u32;
      readonly error: FrameSupportMessagesProcessMessageError;
    } & Struct;
    readonly isProcessed: boolean;
    readonly asProcessed: {
      readonly id: H256;
      readonly origin: u32;
      readonly weightUsed: SpWeightsWeightV2Weight;
      readonly success: bool;
    } & Struct;
    readonly isOverweightEnqueued: boolean;
    readonly asOverweightEnqueued: {
      readonly id: U8aFixed;
      readonly origin: u32;
      readonly pageIndex: u32;
      readonly messageIndex: u32;
    } & Struct;
    readonly isPageReaped: boolean;
    readonly asPageReaped: {
      readonly origin: u32;
      readonly index: u32;
    } & Struct;
    readonly type: 'ProcessingFailed' | 'Processed' | 'OverweightEnqueued' | 'PageReaped';
  }

  /** @name FrameSupportMessagesProcessMessageError (519) */
  interface FrameSupportMessagesProcessMessageError extends Enum {
    readonly isBadFormat: boolean;
    readonly isCorrupt: boolean;
    readonly isUnsupported: boolean;
    readonly isOverweight: boolean;
    readonly asOverweight: SpWeightsWeightV2Weight;
    readonly isYield: boolean;
    readonly isStackLimitReached: boolean;
    readonly type: 'BadFormat' | 'Corrupt' | 'Unsupported' | 'Overweight' | 'Yield' | 'StackLimitReached';
  }

  /** @name FrameBenchmarkingPalletPovEvent (520) */
  interface FrameBenchmarkingPalletPovEvent extends Enum {
    readonly isTestEvent: boolean;
    readonly type: 'TestEvent';
  }

  /** @name PalletTxPauseEvent (521) */
  interface PalletTxPauseEvent extends Enum {
    readonly isCallPaused: boolean;
    readonly asCallPaused: {
      readonly fullName: ITuple<[Bytes, Bytes]>;
    } & Struct;
    readonly isCallUnpaused: boolean;
    readonly asCallUnpaused: {
      readonly fullName: ITuple<[Bytes, Bytes]>;
    } & Struct;
    readonly type: 'CallPaused' | 'CallUnpaused';
  }

  /** @name PalletSafeModeEvent (522) */
  interface PalletSafeModeEvent extends Enum {
    readonly isEntered: boolean;
    readonly asEntered: {
      readonly until: u32;
    } & Struct;
    readonly isExtended: boolean;
    readonly asExtended: {
      readonly until: u32;
    } & Struct;
    readonly isExited: boolean;
    readonly asExited: {
      readonly reason: PalletSafeModeExitReason;
    } & Struct;
    readonly isDepositPlaced: boolean;
    readonly asDepositPlaced: {
      readonly account: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isDepositReleased: boolean;
    readonly asDepositReleased: {
      readonly account: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isDepositSlashed: boolean;
    readonly asDepositSlashed: {
      readonly account: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isCannotDeposit: boolean;
    readonly isCannotRelease: boolean;
    readonly type: 'Entered' | 'Extended' | 'Exited' | 'DepositPlaced' | 'DepositReleased' | 'DepositSlashed' | 'CannotDeposit' | 'CannotRelease';
  }

  /** @name PalletSafeModeExitReason (523) */
  interface PalletSafeModeExitReason extends Enum {
    readonly isTimeout: boolean;
    readonly isForce: boolean;
    readonly type: 'Timeout' | 'Force';
  }

  /** @name PalletStatementEvent (524) */
  interface PalletStatementEvent extends Enum {
    readonly isNewStatement: boolean;
    readonly asNewStatement: {
      readonly account: AccountId32;
      readonly statement: SpStatementStoreStatement;
    } & Struct;
    readonly type: 'NewStatement';
  }

  /** @name SpStatementStoreStatement (525) */
  interface SpStatementStoreStatement extends Struct {
    readonly proof: Option<SpStatementStoreProof>;
    readonly decryptionKey: Option<U8aFixed>;
    readonly channel: Option<U8aFixed>;
    readonly priority: Option<u32>;
    readonly numTopics: u8;
    readonly topics: Vec<U8aFixed>;
    readonly data: Option<Bytes>;
  }

  /** @name SpStatementStoreProof (527) */
  interface SpStatementStoreProof extends Enum {
    readonly isSr25519: boolean;
    readonly asSr25519: {
      readonly signature: U8aFixed;
      readonly signer: U8aFixed;
    } & Struct;
    readonly isEd25519: boolean;
    readonly asEd25519: {
      readonly signature: U8aFixed;
      readonly signer: U8aFixed;
    } & Struct;
    readonly isSecp256k1Ecdsa: boolean;
    readonly asSecp256k1Ecdsa: {
      readonly signature: U8aFixed;
      readonly signer: U8aFixed;
    } & Struct;
    readonly isOnChain: boolean;
    readonly asOnChain: {
      readonly who: U8aFixed;
      readonly blockHash: U8aFixed;
      readonly eventIndex: u64;
    } & Struct;
    readonly type: 'Sr25519' | 'Ed25519' | 'Secp256k1Ecdsa' | 'OnChain';
  }

  /** @name PalletMigrationsEvent (529) */
  interface PalletMigrationsEvent extends Enum {
    readonly isUpgradeStarted: boolean;
    readonly asUpgradeStarted: {
      readonly migrations: u32;
    } & Struct;
    readonly isUpgradeCompleted: boolean;
    readonly isUpgradeFailed: boolean;
    readonly isMigrationSkipped: boolean;
    readonly asMigrationSkipped: {
      readonly index: u32;
    } & Struct;
    readonly isMigrationAdvanced: boolean;
    readonly asMigrationAdvanced: {
      readonly index: u32;
      readonly took: u32;
    } & Struct;
    readonly isMigrationCompleted: boolean;
    readonly asMigrationCompleted: {
      readonly index: u32;
      readonly took: u32;
    } & Struct;
    readonly isMigrationFailed: boolean;
    readonly asMigrationFailed: {
      readonly index: u32;
      readonly took: u32;
    } & Struct;
    readonly isHistoricCleared: boolean;
    readonly asHistoricCleared: {
      readonly nextCursor: Option<Bytes>;
    } & Struct;
    readonly type: 'UpgradeStarted' | 'UpgradeCompleted' | 'UpgradeFailed' | 'MigrationSkipped' | 'MigrationAdvanced' | 'MigrationCompleted' | 'MigrationFailed' | 'HistoricCleared';
  }

  /** @name PalletBrokerEvent (530) */
  interface PalletBrokerEvent extends Enum {
    readonly isPurchased: boolean;
    readonly asPurchased: {
      readonly who: AccountId32;
      readonly regionId: PalletBrokerRegionId;
      readonly price: u128;
      readonly duration: u32;
    } & Struct;
    readonly isRenewable: boolean;
    readonly asRenewable: {
      readonly core: u16;
      readonly price: u128;
      readonly begin: u32;
      readonly workload: Vec<PalletBrokerScheduleItem>;
    } & Struct;
    readonly isRenewed: boolean;
    readonly asRenewed: {
      readonly who: AccountId32;
      readonly price: u128;
      readonly oldCore: u16;
      readonly core: u16;
      readonly begin: u32;
      readonly duration: u32;
      readonly workload: Vec<PalletBrokerScheduleItem>;
    } & Struct;
    readonly isTransferred: boolean;
    readonly asTransferred: {
      readonly regionId: PalletBrokerRegionId;
      readonly duration: u32;
      readonly oldOwner: Option<AccountId32>;
      readonly owner: Option<AccountId32>;
    } & Struct;
    readonly isPartitioned: boolean;
    readonly asPartitioned: {
      readonly oldRegionId: PalletBrokerRegionId;
      readonly newRegionIds: ITuple<[PalletBrokerRegionId, PalletBrokerRegionId]>;
    } & Struct;
    readonly isInterlaced: boolean;
    readonly asInterlaced: {
      readonly oldRegionId: PalletBrokerRegionId;
      readonly newRegionIds: ITuple<[PalletBrokerRegionId, PalletBrokerRegionId]>;
    } & Struct;
    readonly isAssigned: boolean;
    readonly asAssigned: {
      readonly regionId: PalletBrokerRegionId;
      readonly duration: u32;
      readonly task: u32;
    } & Struct;
    readonly isAssignmentRemoved: boolean;
    readonly asAssignmentRemoved: {
      readonly regionId: PalletBrokerRegionId;
    } & Struct;
    readonly isPooled: boolean;
    readonly asPooled: {
      readonly regionId: PalletBrokerRegionId;
      readonly duration: u32;
    } & Struct;
    readonly isCoreCountRequested: boolean;
    readonly asCoreCountRequested: {
      readonly coreCount: u16;
    } & Struct;
    readonly isCoreCountChanged: boolean;
    readonly asCoreCountChanged: {
      readonly coreCount: u16;
    } & Struct;
    readonly isReservationMade: boolean;
    readonly asReservationMade: {
      readonly index: u32;
      readonly workload: Vec<PalletBrokerScheduleItem>;
    } & Struct;
    readonly isReservationCancelled: boolean;
    readonly asReservationCancelled: {
      readonly index: u32;
      readonly workload: Vec<PalletBrokerScheduleItem>;
    } & Struct;
    readonly isSaleInitialized: boolean;
    readonly asSaleInitialized: {
      readonly saleStart: u32;
      readonly leadinLength: u32;
      readonly startPrice: u128;
      readonly endPrice: u128;
      readonly regionBegin: u32;
      readonly regionEnd: u32;
      readonly idealCoresSold: u16;
      readonly coresOffered: u16;
    } & Struct;
    readonly isLeased: boolean;
    readonly asLeased: {
      readonly task: u32;
      readonly until: u32;
    } & Struct;
    readonly isLeaseRemoved: boolean;
    readonly asLeaseRemoved: {
      readonly task: u32;
    } & Struct;
    readonly isLeaseEnding: boolean;
    readonly asLeaseEnding: {
      readonly task: u32;
      readonly when: u32;
    } & Struct;
    readonly isSalesStarted: boolean;
    readonly asSalesStarted: {
      readonly price: u128;
      readonly coreCount: u16;
    } & Struct;
    readonly isRevenueClaimBegun: boolean;
    readonly asRevenueClaimBegun: {
      readonly region: PalletBrokerRegionId;
      readonly maxTimeslices: u32;
    } & Struct;
    readonly isRevenueClaimItem: boolean;
    readonly asRevenueClaimItem: {
      readonly when: u32;
      readonly amount: u128;
    } & Struct;
    readonly isRevenueClaimPaid: boolean;
    readonly asRevenueClaimPaid: {
      readonly who: AccountId32;
      readonly amount: u128;
      readonly next: Option<PalletBrokerRegionId>;
    } & Struct;
    readonly isCreditPurchased: boolean;
    readonly asCreditPurchased: {
      readonly who: AccountId32;
      readonly beneficiary: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isRegionDropped: boolean;
    readonly asRegionDropped: {
      readonly regionId: PalletBrokerRegionId;
      readonly duration: u32;
    } & Struct;
    readonly isContributionDropped: boolean;
    readonly asContributionDropped: {
      readonly regionId: PalletBrokerRegionId;
    } & Struct;
    readonly isHistoryInitialized: boolean;
    readonly asHistoryInitialized: {
      readonly when: u32;
      readonly privatePoolSize: u32;
      readonly systemPoolSize: u32;
    } & Struct;
    readonly isHistoryDropped: boolean;
    readonly asHistoryDropped: {
      readonly when: u32;
      readonly revenue: u128;
    } & Struct;
    readonly isHistoryIgnored: boolean;
    readonly asHistoryIgnored: {
      readonly when: u32;
      readonly revenue: u128;
    } & Struct;
    readonly isClaimsReady: boolean;
    readonly asClaimsReady: {
      readonly when: u32;
      readonly systemPayout: u128;
      readonly privatePayout: u128;
    } & Struct;
    readonly isCoreAssigned: boolean;
    readonly asCoreAssigned: {
      readonly core: u16;
      readonly when: u32;
      readonly assignment: Vec<ITuple<[PalletBrokerCoretimeInterfaceCoreAssignment, u16]>>;
    } & Struct;
    readonly isPotentialRenewalDropped: boolean;
    readonly asPotentialRenewalDropped: {
      readonly when: u32;
      readonly core: u16;
    } & Struct;
    readonly isAutoRenewalEnabled: boolean;
    readonly asAutoRenewalEnabled: {
      readonly core: u16;
      readonly task: u32;
    } & Struct;
    readonly isAutoRenewalDisabled: boolean;
    readonly asAutoRenewalDisabled: {
      readonly core: u16;
      readonly task: u32;
    } & Struct;
    readonly isAutoRenewalFailed: boolean;
    readonly asAutoRenewalFailed: {
      readonly core: u16;
      readonly payer: Option<AccountId32>;
    } & Struct;
    readonly isAutoRenewalLimitReached: boolean;
    readonly type: 'Purchased' | 'Renewable' | 'Renewed' | 'Transferred' | 'Partitioned' | 'Interlaced' | 'Assigned' | 'AssignmentRemoved' | 'Pooled' | 'CoreCountRequested' | 'CoreCountChanged' | 'ReservationMade' | 'ReservationCancelled' | 'SaleInitialized' | 'Leased' | 'LeaseRemoved' | 'LeaseEnding' | 'SalesStarted' | 'RevenueClaimBegun' | 'RevenueClaimItem' | 'RevenueClaimPaid' | 'CreditPurchased' | 'RegionDropped' | 'ContributionDropped' | 'HistoryInitialized' | 'HistoryDropped' | 'HistoryIgnored' | 'ClaimsReady' | 'CoreAssigned' | 'PotentialRenewalDropped' | 'AutoRenewalEnabled' | 'AutoRenewalDisabled' | 'AutoRenewalFailed' | 'AutoRenewalLimitReached';
  }

  /** @name PalletParametersEvent (535) */
  interface PalletParametersEvent extends Enum {
    readonly isUpdated: boolean;
    readonly asUpdated: {
      readonly key: KitchensinkRuntimeRuntimeParametersKey;
      readonly oldValue: Option<KitchensinkRuntimeRuntimeParametersValue>;
      readonly newValue: Option<KitchensinkRuntimeRuntimeParametersValue>;
    } & Struct;
    readonly type: 'Updated';
  }

  /** @name KitchensinkRuntimeRuntimeParametersKey (536) */
  interface KitchensinkRuntimeRuntimeParametersKey extends Enum {
    readonly isStorage: boolean;
    readonly asStorage: KitchensinkRuntimeDynamicParamsStorageParametersKey;
    readonly isReferenda: boolean;
    readonly asReferenda: KitchensinkRuntimeDynamicParamsReferendaParametersKey;
    readonly type: 'Storage' | 'Referenda';
  }

  /** @name KitchensinkRuntimeDynamicParamsStorageParametersKey (537) */
  interface KitchensinkRuntimeDynamicParamsStorageParametersKey extends Enum {
    readonly isBaseDeposit: boolean;
    readonly isByteDeposit: boolean;
    readonly type: 'BaseDeposit' | 'ByteDeposit';
  }

  /** @name KitchensinkRuntimeDynamicParamsReferendaParametersKey (538) */
  interface KitchensinkRuntimeDynamicParamsReferendaParametersKey extends Enum {
    readonly isTracks: boolean;
    readonly isOrigins: boolean;
    readonly type: 'Tracks' | 'Origins';
  }

  /** @name KitchensinkRuntimeRuntimeParametersValue (540) */
  interface KitchensinkRuntimeRuntimeParametersValue extends Enum {
    readonly isStorage: boolean;
    readonly asStorage: KitchensinkRuntimeDynamicParamsStorageParametersValue;
    readonly isReferenda: boolean;
    readonly asReferenda: KitchensinkRuntimeDynamicParamsReferendaParametersValue;
    readonly type: 'Storage' | 'Referenda';
  }

  /** @name KitchensinkRuntimeDynamicParamsStorageParametersValue (541) */
  interface KitchensinkRuntimeDynamicParamsStorageParametersValue extends Enum {
    readonly isBaseDeposit: boolean;
    readonly asBaseDeposit: u128;
    readonly isByteDeposit: boolean;
    readonly asByteDeposit: u128;
    readonly type: 'BaseDeposit' | 'ByteDeposit';
  }

  /** @name KitchensinkRuntimeDynamicParamsReferendaParametersValue (542) */
  interface KitchensinkRuntimeDynamicParamsReferendaParametersValue extends Enum {
    readonly isTracks: boolean;
    readonly asTracks: Vec<PalletReferendaTrack>;
    readonly isOrigins: boolean;
    readonly asOrigins: Vec<ITuple<[KitchensinkRuntimeOriginCaller, u16]>>;
    readonly type: 'Tracks' | 'Origins';
  }

  /** @name PalletSkipFeelessPaymentEvent (543) */
  interface PalletSkipFeelessPaymentEvent extends Enum {
    readonly isFeeSkipped: boolean;
    readonly asFeeSkipped: {
      readonly origin: KitchensinkRuntimeOriginCaller;
    } & Struct;
    readonly type: 'FeeSkipped';
  }

  /** @name PalletAssetConversionOpsEvent (544) */
  interface PalletAssetConversionOpsEvent extends Enum {
    readonly isMigratedToNewAccount: boolean;
    readonly asMigratedToNewAccount: {
      readonly poolId: ITuple<[FrameSupportTokensFungibleUnionOfNativeOrWithId, FrameSupportTokensFungibleUnionOfNativeOrWithId]>;
      readonly priorAccount: AccountId32;
      readonly newAccount: AccountId32;
    } & Struct;
    readonly type: 'MigratedToNewAccount';
  }

  /** @name PalletReviveEvent (545) */
  interface PalletReviveEvent extends Enum {
    readonly isContractEmitted: boolean;
    readonly asContractEmitted: {
      readonly contract: H160;
      readonly data: Bytes;
      readonly topics: Vec<H256>;
    } & Struct;
    readonly type: 'ContractEmitted';
  }

  /** @name PalletDelegatedStakingEvent (546) */
  interface PalletDelegatedStakingEvent extends Enum {
    readonly isDelegated: boolean;
    readonly asDelegated: {
      readonly agent: AccountId32;
      readonly delegator: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isReleased: boolean;
    readonly asReleased: {
      readonly agent: AccountId32;
      readonly delegator: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSlashed: boolean;
    readonly asSlashed: {
      readonly agent: AccountId32;
      readonly delegator: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isMigratedDelegation: boolean;
    readonly asMigratedDelegation: {
      readonly agent: AccountId32;
      readonly delegator: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'Delegated' | 'Released' | 'Slashed' | 'MigratedDelegation';
  }

  /** @name PalletAssetRewardsEvent (547) */
  interface PalletAssetRewardsEvent extends Enum {
    readonly isStaked: boolean;
    readonly asStaked: {
      readonly staker: AccountId32;
      readonly poolId: u32;
      readonly amount: u128;
    } & Struct;
    readonly isUnstaked: boolean;
    readonly asUnstaked: {
      readonly caller: AccountId32;
      readonly staker: AccountId32;
      readonly poolId: u32;
      readonly amount: u128;
    } & Struct;
    readonly isRewardsHarvested: boolean;
    readonly asRewardsHarvested: {
      readonly caller: AccountId32;
      readonly staker: AccountId32;
      readonly poolId: u32;
      readonly amount: u128;
    } & Struct;
    readonly isPoolCreated: boolean;
    readonly asPoolCreated: {
      readonly creator: AccountId32;
      readonly poolId: u32;
      readonly stakedAssetId: FrameSupportTokensFungibleUnionOfNativeOrWithId;
      readonly rewardAssetId: FrameSupportTokensFungibleUnionOfNativeOrWithId;
      readonly rewardRatePerBlock: u128;
      readonly expiryBlock: u32;
      readonly admin: AccountId32;
    } & Struct;
    readonly isPoolRewardRateModified: boolean;
    readonly asPoolRewardRateModified: {
      readonly poolId: u32;
      readonly newRewardRatePerBlock: u128;
    } & Struct;
    readonly isPoolAdminModified: boolean;
    readonly asPoolAdminModified: {
      readonly poolId: u32;
      readonly newAdmin: AccountId32;
    } & Struct;
    readonly isPoolExpiryBlockModified: boolean;
    readonly asPoolExpiryBlockModified: {
      readonly poolId: u32;
      readonly newExpiryBlock: u32;
    } & Struct;
    readonly isPoolCleanedUp: boolean;
    readonly asPoolCleanedUp: {
      readonly poolId: u32;
    } & Struct;
    readonly type: 'Staked' | 'Unstaked' | 'RewardsHarvested' | 'PoolCreated' | 'PoolRewardRateModified' | 'PoolAdminModified' | 'PoolExpiryBlockModified' | 'PoolCleanedUp';
  }

  /** @name PalletAssetsFreezerEvent (548) */
  interface PalletAssetsFreezerEvent extends Enum {
    readonly isFrozen: boolean;
    readonly asFrozen: {
      readonly who: AccountId32;
      readonly assetId: u32;
      readonly amount: u128;
    } & Struct;
    readonly isThawed: boolean;
    readonly asThawed: {
      readonly who: AccountId32;
      readonly assetId: u32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'Frozen' | 'Thawed';
  }

  /** @name PalletMetaTxEvent (549) */
  interface PalletMetaTxEvent extends Enum {
    readonly isDispatched: boolean;
    readonly asDispatched: {
      readonly result: Result<FrameSupportDispatchPostDispatchInfo, SpRuntimeDispatchErrorWithPostInfo>;
    } & Struct;
    readonly type: 'Dispatched';
  }

  /** @name FrameSystemPhase (550) */
  interface FrameSystemPhase extends Enum {
    readonly isApplyExtrinsic: boolean;
    readonly asApplyExtrinsic: u32;
    readonly isFinalization: boolean;
    readonly isInitialization: boolean;
    readonly type: 'ApplyExtrinsic' | 'Finalization' | 'Initialization';
  }

  /** @name FrameSystemLastRuntimeUpgradeInfo (552) */
  interface FrameSystemLastRuntimeUpgradeInfo extends Struct {
    readonly specVersion: Compact<u32>;
    readonly specName: Text;
  }

  /** @name FrameSystemCodeUpgradeAuthorization (555) */
  interface FrameSystemCodeUpgradeAuthorization extends Struct {
    readonly codeHash: H256;
    readonly checkVersion: bool;
  }

  /** @name FrameSystemLimitsBlockWeights (556) */
  interface FrameSystemLimitsBlockWeights extends Struct {
    readonly baseBlock: SpWeightsWeightV2Weight;
    readonly maxBlock: SpWeightsWeightV2Weight;
    readonly perClass: FrameSupportDispatchPerDispatchClassWeightsPerClass;
  }

  /** @name FrameSupportDispatchPerDispatchClassWeightsPerClass (557) */
  interface FrameSupportDispatchPerDispatchClassWeightsPerClass extends Struct {
    readonly normal: FrameSystemLimitsWeightsPerClass;
    readonly operational: FrameSystemLimitsWeightsPerClass;
    readonly mandatory: FrameSystemLimitsWeightsPerClass;
  }

  /** @name FrameSystemLimitsWeightsPerClass (558) */
  interface FrameSystemLimitsWeightsPerClass extends Struct {
    readonly baseExtrinsic: SpWeightsWeightV2Weight;
    readonly maxExtrinsic: Option<SpWeightsWeightV2Weight>;
    readonly maxTotal: Option<SpWeightsWeightV2Weight>;
    readonly reserved: Option<SpWeightsWeightV2Weight>;
  }

  /** @name FrameSystemLimitsBlockLength (559) */
  interface FrameSystemLimitsBlockLength extends Struct {
    readonly max: FrameSupportDispatchPerDispatchClassU32;
  }

  /** @name FrameSupportDispatchPerDispatchClassU32 (560) */
  interface FrameSupportDispatchPerDispatchClassU32 extends Struct {
    readonly normal: u32;
    readonly operational: u32;
    readonly mandatory: u32;
  }

  /** @name SpWeightsRuntimeDbWeight (561) */
  interface SpWeightsRuntimeDbWeight extends Struct {
    readonly read: u64;
    readonly write: u64;
  }

  /** @name SpVersionRuntimeVersion (562) */
  interface SpVersionRuntimeVersion extends Struct {
    readonly specName: Text;
    readonly implName: Text;
    readonly authoringVersion: u32;
    readonly specVersion: u32;
    readonly implVersion: u32;
    readonly apis: Vec<ITuple<[U8aFixed, u32]>>;
    readonly transactionVersion: u32;
    readonly systemVersion: u8;
  }

  /** @name FrameSystemError (566) */
  interface FrameSystemError extends Enum {
    readonly isInvalidSpecName: boolean;
    readonly isSpecVersionNeedsToIncrease: boolean;
    readonly isFailedToExtractRuntimeVersion: boolean;
    readonly isNonDefaultComposite: boolean;
    readonly isNonZeroRefCount: boolean;
    readonly isCallFiltered: boolean;
    readonly isMultiBlockMigrationsOngoing: boolean;
    readonly isNothingAuthorized: boolean;
    readonly isUnauthorized: boolean;
    readonly type: 'InvalidSpecName' | 'SpecVersionNeedsToIncrease' | 'FailedToExtractRuntimeVersion' | 'NonDefaultComposite' | 'NonZeroRefCount' | 'CallFiltered' | 'MultiBlockMigrationsOngoing' | 'NothingAuthorized' | 'Unauthorized';
  }

  /** @name PalletUtilityError (567) */
  interface PalletUtilityError extends Enum {
    readonly isTooManyCalls: boolean;
    readonly type: 'TooManyCalls';
  }

  /** @name SpConsensusBabeDigestsPreDigest (574) */
  interface SpConsensusBabeDigestsPreDigest extends Enum {
    readonly isPrimary: boolean;
    readonly asPrimary: SpConsensusBabeDigestsPrimaryPreDigest;
    readonly isSecondaryPlain: boolean;
    readonly asSecondaryPlain: SpConsensusBabeDigestsSecondaryPlainPreDigest;
    readonly isSecondaryVRF: boolean;
    readonly asSecondaryVRF: SpConsensusBabeDigestsSecondaryVRFPreDigest;
    readonly type: 'Primary' | 'SecondaryPlain' | 'SecondaryVRF';
  }

  /** @name SpConsensusBabeDigestsPrimaryPreDigest (575) */
  interface SpConsensusBabeDigestsPrimaryPreDigest extends Struct {
    readonly authorityIndex: u32;
    readonly slot: u64;
    readonly vrfSignature: SpCoreSr25519VrfVrfSignature;
  }

  /** @name SpCoreSr25519VrfVrfSignature (576) */
  interface SpCoreSr25519VrfVrfSignature extends Struct {
    readonly preOutput: U8aFixed;
    readonly proof: U8aFixed;
  }

  /** @name SpConsensusBabeDigestsSecondaryPlainPreDigest (577) */
  interface SpConsensusBabeDigestsSecondaryPlainPreDigest extends Struct {
    readonly authorityIndex: u32;
    readonly slot: u64;
  }

  /** @name SpConsensusBabeDigestsSecondaryVRFPreDigest (578) */
  interface SpConsensusBabeDigestsSecondaryVRFPreDigest extends Struct {
    readonly authorityIndex: u32;
    readonly slot: u64;
    readonly vrfSignature: SpCoreSr25519VrfVrfSignature;
  }

  /** @name SpConsensusBabeBabeEpochConfiguration (579) */
  interface SpConsensusBabeBabeEpochConfiguration extends Struct {
    readonly c: ITuple<[u64, u64]>;
    readonly allowedSlots: SpConsensusBabeAllowedSlots;
  }

  /** @name PalletBabeError (583) */
  interface PalletBabeError extends Enum {
    readonly isInvalidEquivocationProof: boolean;
    readonly isInvalidKeyOwnershipProof: boolean;
    readonly isDuplicateOffenceReport: boolean;
    readonly isInvalidConfiguration: boolean;
    readonly type: 'InvalidEquivocationProof' | 'InvalidKeyOwnershipProof' | 'DuplicateOffenceReport' | 'InvalidConfiguration';
  }

  /** @name PalletIndicesError (585) */
  interface PalletIndicesError extends Enum {
    readonly isNotAssigned: boolean;
    readonly isNotOwner: boolean;
    readonly isInUse: boolean;
    readonly isNotTransfer: boolean;
    readonly isPermanent: boolean;
    readonly type: 'NotAssigned' | 'NotOwner' | 'InUse' | 'NotTransfer' | 'Permanent';
  }

  /** @name PalletBalancesBalanceLock (587) */
  interface PalletBalancesBalanceLock extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
    readonly reasons: PalletBalancesReasons;
  }

  /** @name PalletBalancesReasons (588) */
  interface PalletBalancesReasons extends Enum {
    readonly isFee: boolean;
    readonly isMisc: boolean;
    readonly isAll: boolean;
    readonly type: 'Fee' | 'Misc' | 'All';
  }

  /** @name PalletBalancesReserveData (591) */
  interface PalletBalancesReserveData extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
  }

  /** @name FrameSupportTokensMiscIdAmountRuntimeHoldReason (594) */
  interface FrameSupportTokensMiscIdAmountRuntimeHoldReason extends Struct {
    readonly id: KitchensinkRuntimeRuntimeHoldReason;
    readonly amount: u128;
  }

  /** @name KitchensinkRuntimeRuntimeHoldReason (595) */
  interface KitchensinkRuntimeRuntimeHoldReason extends Enum {
    readonly isStaking: boolean;
    readonly asStaking: PalletStakingPalletHoldReason;
    readonly isCouncil: boolean;
    readonly asCouncil: PalletCollectiveHoldReason;
    readonly isTechnicalCommittee: boolean;
    readonly asTechnicalCommittee: PalletCollectiveHoldReason;
    readonly isContracts: boolean;
    readonly asContracts: PalletContractsHoldReason;
    readonly isPreimage: boolean;
    readonly asPreimage: PalletPreimageHoldReason;
    readonly isNis: boolean;
    readonly asNis: PalletNisHoldReason;
    readonly isNftFractionalization: boolean;
    readonly asNftFractionalization: PalletNftFractionalizationHoldReason;
    readonly isTransactionStorage: boolean;
    readonly asTransactionStorage: PalletTransactionStorageHoldReason;
    readonly isStateTrieMigration: boolean;
    readonly asStateTrieMigration: PalletStateTrieMigrationHoldReason;
    readonly isAllianceMotion: boolean;
    readonly asAllianceMotion: PalletCollectiveHoldReason;
    readonly isSafeMode: boolean;
    readonly asSafeMode: PalletSafeModeHoldReason;
    readonly isRevive: boolean;
    readonly asRevive: PalletReviveHoldReason;
    readonly isDelegatedStaking: boolean;
    readonly asDelegatedStaking: PalletDelegatedStakingHoldReason;
    readonly isAssetRewards: boolean;
    readonly asAssetRewards: PalletAssetRewardsHoldReason;
    readonly type: 'Staking' | 'Council' | 'TechnicalCommittee' | 'Contracts' | 'Preimage' | 'Nis' | 'NftFractionalization' | 'TransactionStorage' | 'StateTrieMigration' | 'AllianceMotion' | 'SafeMode' | 'Revive' | 'DelegatedStaking' | 'AssetRewards';
  }

  /** @name PalletStakingPalletHoldReason (596) */
  interface PalletStakingPalletHoldReason extends Enum {
    readonly isStaking: boolean;
    readonly type: 'Staking';
  }

  /** @name PalletCollectiveHoldReason (597) */
  interface PalletCollectiveHoldReason extends Enum {
    readonly isProposalSubmission: boolean;
    readonly type: 'ProposalSubmission';
  }

  /** @name PalletContractsHoldReason (599) */
  interface PalletContractsHoldReason extends Enum {
    readonly isCodeUploadDepositReserve: boolean;
    readonly isStorageDepositReserve: boolean;
    readonly type: 'CodeUploadDepositReserve' | 'StorageDepositReserve';
  }

  /** @name PalletPreimageHoldReason (600) */
  interface PalletPreimageHoldReason extends Enum {
    readonly isPreimage: boolean;
    readonly type: 'Preimage';
  }

  /** @name PalletNisHoldReason (601) */
  interface PalletNisHoldReason extends Enum {
    readonly isNftReceipt: boolean;
    readonly type: 'NftReceipt';
  }

  /** @name PalletNftFractionalizationHoldReason (602) */
  interface PalletNftFractionalizationHoldReason extends Enum {
    readonly isFractionalized: boolean;
    readonly type: 'Fractionalized';
  }

  /** @name PalletTransactionStorageHoldReason (603) */
  interface PalletTransactionStorageHoldReason extends Enum {
    readonly isStorageFeeHold: boolean;
    readonly type: 'StorageFeeHold';
  }

  /** @name PalletStateTrieMigrationHoldReason (604) */
  interface PalletStateTrieMigrationHoldReason extends Enum {
    readonly isSlashForMigrate: boolean;
    readonly type: 'SlashForMigrate';
  }

  /** @name PalletSafeModeHoldReason (606) */
  interface PalletSafeModeHoldReason extends Enum {
    readonly isEnterOrExtend: boolean;
    readonly type: 'EnterOrExtend';
  }

  /** @name PalletReviveHoldReason (607) */
  interface PalletReviveHoldReason extends Enum {
    readonly isCodeUploadDepositReserve: boolean;
    readonly isStorageDepositReserve: boolean;
    readonly isAddressMapping: boolean;
    readonly type: 'CodeUploadDepositReserve' | 'StorageDepositReserve' | 'AddressMapping';
  }

  /** @name PalletDelegatedStakingHoldReason (608) */
  interface PalletDelegatedStakingHoldReason extends Enum {
    readonly isStakingDelegation: boolean;
    readonly type: 'StakingDelegation';
  }

  /** @name PalletAssetRewardsHoldReason (609) */
  interface PalletAssetRewardsHoldReason extends Enum {
    readonly isPoolCreation: boolean;
    readonly type: 'PoolCreation';
  }

  /** @name FrameSupportTokensMiscIdAmountRuntimeFreezeReason (612) */
  interface FrameSupportTokensMiscIdAmountRuntimeFreezeReason extends Struct {
    readonly id: KitchensinkRuntimeRuntimeFreezeReason;
    readonly amount: u128;
  }

  /** @name KitchensinkRuntimeRuntimeFreezeReason (613) */
  interface KitchensinkRuntimeRuntimeFreezeReason extends Enum {
    readonly isNominationPools: boolean;
    readonly asNominationPools: PalletNominationPoolsFreezeReason;
    readonly isAssetRewards: boolean;
    readonly asAssetRewards: PalletAssetRewardsFreezeReason;
    readonly type: 'NominationPools' | 'AssetRewards';
  }

  /** @name PalletNominationPoolsFreezeReason (614) */
  interface PalletNominationPoolsFreezeReason extends Enum {
    readonly isPoolMinBalance: boolean;
    readonly type: 'PoolMinBalance';
  }

  /** @name PalletAssetRewardsFreezeReason (615) */
  interface PalletAssetRewardsFreezeReason extends Enum {
    readonly isStaked: boolean;
    readonly type: 'Staked';
  }

  /** @name PalletBalancesError (617) */
  interface PalletBalancesError extends Enum {
    readonly isVestingBalance: boolean;
    readonly isLiquidityRestrictions: boolean;
    readonly isInsufficientBalance: boolean;
    readonly isExistentialDeposit: boolean;
    readonly isExpendability: boolean;
    readonly isExistingVestingSchedule: boolean;
    readonly isDeadAccount: boolean;
    readonly isTooManyReserves: boolean;
    readonly isTooManyHolds: boolean;
    readonly isTooManyFreezes: boolean;
    readonly isIssuanceDeactivated: boolean;
    readonly isDeltaZero: boolean;
    readonly type: 'VestingBalance' | 'LiquidityRestrictions' | 'InsufficientBalance' | 'ExistentialDeposit' | 'Expendability' | 'ExistingVestingSchedule' | 'DeadAccount' | 'TooManyReserves' | 'TooManyHolds' | 'TooManyFreezes' | 'IssuanceDeactivated' | 'DeltaZero';
  }

  /** @name PalletTransactionPaymentReleases (618) */
  interface PalletTransactionPaymentReleases extends Enum {
    readonly isV1Ancient: boolean;
    readonly isV2: boolean;
    readonly type: 'V1Ancient' | 'V2';
  }

  /** @name PalletElectionProviderMultiPhaseReadySolution (619) */
  interface PalletElectionProviderMultiPhaseReadySolution extends Struct {
    readonly supports: Vec<ITuple<[AccountId32, SpNposElectionsSupport]>>;
    readonly score: SpNposElectionsElectionScore;
    readonly compute: PalletElectionProviderMultiPhaseElectionCompute;
  }

  /** @name PalletElectionProviderMultiPhaseRoundSnapshot (621) */
  interface PalletElectionProviderMultiPhaseRoundSnapshot extends Struct {
    readonly voters: Vec<ITuple<[AccountId32, u64, Vec<AccountId32>]>>;
    readonly targets: Vec<AccountId32>;
  }

  /** @name PalletElectionProviderMultiPhaseSignedSignedSubmission (628) */
  interface PalletElectionProviderMultiPhaseSignedSignedSubmission extends Struct {
    readonly who: AccountId32;
    readonly deposit: u128;
    readonly rawSolution: PalletElectionProviderMultiPhaseRawSolution;
    readonly callFee: u128;
  }

  /** @name PalletElectionProviderMultiPhaseError (629) */
  interface PalletElectionProviderMultiPhaseError extends Enum {
    readonly isPreDispatchEarlySubmission: boolean;
    readonly isPreDispatchWrongWinnerCount: boolean;
    readonly isPreDispatchWeakSubmission: boolean;
    readonly isSignedQueueFull: boolean;
    readonly isSignedCannotPayDeposit: boolean;
    readonly isSignedInvalidWitness: boolean;
    readonly isSignedTooMuchWeight: boolean;
    readonly isOcwCallWrongEra: boolean;
    readonly isMissingSnapshotMetadata: boolean;
    readonly isInvalidSubmissionIndex: boolean;
    readonly isCallNotAllowed: boolean;
    readonly isFallbackFailed: boolean;
    readonly isBoundNotMet: boolean;
    readonly isTooManyWinners: boolean;
    readonly isPreDispatchDifferentRound: boolean;
    readonly type: 'PreDispatchEarlySubmission' | 'PreDispatchWrongWinnerCount' | 'PreDispatchWeakSubmission' | 'SignedQueueFull' | 'SignedCannotPayDeposit' | 'SignedInvalidWitness' | 'SignedTooMuchWeight' | 'OcwCallWrongEra' | 'MissingSnapshotMetadata' | 'InvalidSubmissionIndex' | 'CallNotAllowed' | 'FallbackFailed' | 'BoundNotMet' | 'TooManyWinners' | 'PreDispatchDifferentRound';
  }

  /** @name PalletStakingStakingLedger (630) */
  interface PalletStakingStakingLedger extends Struct {
    readonly stash: AccountId32;
    readonly total: Compact<u128>;
    readonly active: Compact<u128>;
    readonly unlocking: Vec<PalletStakingUnlockChunk>;
    readonly legacyClaimedRewards: Vec<u32>;
  }

  /** @name PalletStakingNominations (632) */
  interface PalletStakingNominations extends Struct {
    readonly targets: Vec<AccountId32>;
    readonly submittedIn: u32;
    readonly suppressed: bool;
  }

  /** @name PalletStakingActiveEraInfo (633) */
  interface PalletStakingActiveEraInfo extends Struct {
    readonly index: u32;
    readonly start: Option<u64>;
  }

  /** @name SpStakingExposure (636) */
  interface SpStakingExposure extends Struct {
    readonly total: Compact<u128>;
    readonly own: Compact<u128>;
    readonly others: Vec<SpStakingIndividualExposure>;
  }

  /** @name SpStakingIndividualExposure (638) */
  interface SpStakingIndividualExposure extends Struct {
    readonly who: AccountId32;
    readonly value: Compact<u128>;
  }

  /** @name SpStakingPagedExposureMetadata (639) */
  interface SpStakingPagedExposureMetadata extends Struct {
    readonly total: Compact<u128>;
    readonly own: Compact<u128>;
    readonly nominatorCount: u32;
    readonly pageCount: u32;
  }

  /** @name SpStakingExposurePage (641) */
  interface SpStakingExposurePage extends Struct {
    readonly pageTotal: Compact<u128>;
    readonly others: Vec<SpStakingIndividualExposure>;
  }

  /** @name PalletStakingEraRewardPoints (642) */
  interface PalletStakingEraRewardPoints extends Struct {
    readonly total: u32;
    readonly individual: BTreeMap<AccountId32, u32>;
  }

  /** @name PalletStakingUnappliedSlash (647) */
  interface PalletStakingUnappliedSlash extends Struct {
    readonly validator: AccountId32;
    readonly own: u128;
    readonly others: Vec<ITuple<[AccountId32, u128]>>;
    readonly reporters: Vec<AccountId32>;
    readonly payout: u128;
  }

  /** @name PalletStakingSlashingSlashingSpans (649) */
  interface PalletStakingSlashingSlashingSpans extends Struct {
    readonly spanIndex: u32;
    readonly lastStart: u32;
    readonly lastNonzeroSlash: u32;
    readonly prior: Vec<u32>;
  }

  /** @name PalletStakingSlashingSpanRecord (650) */
  interface PalletStakingSlashingSpanRecord extends Struct {
    readonly slashed: u128;
    readonly paidOut: u128;
  }

  /** @name PalletStakingPalletError (651) */
  interface PalletStakingPalletError extends Enum {
    readonly isNotController: boolean;
    readonly isNotStash: boolean;
    readonly isAlreadyBonded: boolean;
    readonly isAlreadyPaired: boolean;
    readonly isEmptyTargets: boolean;
    readonly isDuplicateIndex: boolean;
    readonly isInvalidSlashIndex: boolean;
    readonly isInsufficientBond: boolean;
    readonly isNoMoreChunks: boolean;
    readonly isNoUnlockChunk: boolean;
    readonly isFundedTarget: boolean;
    readonly isInvalidEraToReward: boolean;
    readonly isInvalidNumberOfNominations: boolean;
    readonly isNotSortedAndUnique: boolean;
    readonly isAlreadyClaimed: boolean;
    readonly isInvalidPage: boolean;
    readonly isIncorrectHistoryDepth: boolean;
    readonly isIncorrectSlashingSpans: boolean;
    readonly isBadState: boolean;
    readonly isTooManyTargets: boolean;
    readonly isBadTarget: boolean;
    readonly isCannotChillOther: boolean;
    readonly isTooManyNominators: boolean;
    readonly isTooManyValidators: boolean;
    readonly isCommissionTooLow: boolean;
    readonly isBoundNotMet: boolean;
    readonly isControllerDeprecated: boolean;
    readonly isCannotRestoreLedger: boolean;
    readonly isRewardDestinationRestricted: boolean;
    readonly isNotEnoughFunds: boolean;
    readonly isVirtualStakerNotAllowed: boolean;
    readonly isCannotReapStash: boolean;
    readonly isAlreadyMigrated: boolean;
    readonly isRestricted: boolean;
    readonly type: 'NotController' | 'NotStash' | 'AlreadyBonded' | 'AlreadyPaired' | 'EmptyTargets' | 'DuplicateIndex' | 'InvalidSlashIndex' | 'InsufficientBond' | 'NoMoreChunks' | 'NoUnlockChunk' | 'FundedTarget' | 'InvalidEraToReward' | 'InvalidNumberOfNominations' | 'NotSortedAndUnique' | 'AlreadyClaimed' | 'InvalidPage' | 'IncorrectHistoryDepth' | 'IncorrectSlashingSpans' | 'BadState' | 'TooManyTargets' | 'BadTarget' | 'CannotChillOther' | 'TooManyNominators' | 'TooManyValidators' | 'CommissionTooLow' | 'BoundNotMet' | 'ControllerDeprecated' | 'CannotRestoreLedger' | 'RewardDestinationRestricted' | 'NotEnoughFunds' | 'VirtualStakerNotAllowed' | 'CannotReapStash' | 'AlreadyMigrated' | 'Restricted';
  }

  /** @name SpCoreCryptoKeyTypeId (658) */
  interface SpCoreCryptoKeyTypeId extends U8aFixed {}

  /** @name PalletSessionError (659) */
  interface PalletSessionError extends Enum {
    readonly isInvalidProof: boolean;
    readonly isNoAssociatedValidatorId: boolean;
    readonly isDuplicatedKey: boolean;
    readonly isNoKeys: boolean;
    readonly isNoAccount: boolean;
    readonly type: 'InvalidProof' | 'NoAssociatedValidatorId' | 'DuplicatedKey' | 'NoKeys' | 'NoAccount';
  }

  /** @name PalletDemocracyReferendumInfo (665) */
  interface PalletDemocracyReferendumInfo extends Enum {
    readonly isOngoing: boolean;
    readonly asOngoing: PalletDemocracyReferendumStatus;
    readonly isFinished: boolean;
    readonly asFinished: {
      readonly approved: bool;
      readonly end: u32;
    } & Struct;
    readonly type: 'Ongoing' | 'Finished';
  }

  /** @name PalletDemocracyReferendumStatus (666) */
  interface PalletDemocracyReferendumStatus extends Struct {
    readonly end: u32;
    readonly proposal: FrameSupportPreimagesBounded;
    readonly threshold: PalletDemocracyVoteThreshold;
    readonly delay: u32;
    readonly tally: PalletDemocracyTally;
  }

  /** @name PalletDemocracyTally (667) */
  interface PalletDemocracyTally extends Struct {
    readonly ayes: u128;
    readonly nays: u128;
    readonly turnout: u128;
  }

  /** @name PalletDemocracyVoteVoting (668) */
  interface PalletDemocracyVoteVoting extends Enum {
    readonly isDirect: boolean;
    readonly asDirect: {
      readonly votes: Vec<ITuple<[u32, PalletDemocracyVoteAccountVote]>>;
      readonly delegations: PalletDemocracyDelegations;
      readonly prior: PalletDemocracyVotePriorLock;
    } & Struct;
    readonly isDelegating: boolean;
    readonly asDelegating: {
      readonly balance: u128;
      readonly target: AccountId32;
      readonly conviction: PalletDemocracyConviction;
      readonly delegations: PalletDemocracyDelegations;
      readonly prior: PalletDemocracyVotePriorLock;
    } & Struct;
    readonly type: 'Direct' | 'Delegating';
  }

  /** @name PalletDemocracyDelegations (672) */
  interface PalletDemocracyDelegations extends Struct {
    readonly votes: u128;
    readonly capital: u128;
  }

  /** @name PalletDemocracyVotePriorLock (673) */
  interface PalletDemocracyVotePriorLock extends ITuple<[u32, u128]> {}

  /** @name PalletDemocracyError (676) */
  interface PalletDemocracyError extends Enum {
    readonly isValueLow: boolean;
    readonly isProposalMissing: boolean;
    readonly isAlreadyCanceled: boolean;
    readonly isDuplicateProposal: boolean;
    readonly isProposalBlacklisted: boolean;
    readonly isNotSimpleMajority: boolean;
    readonly isInvalidHash: boolean;
    readonly isNoProposal: boolean;
    readonly isAlreadyVetoed: boolean;
    readonly isReferendumInvalid: boolean;
    readonly isNoneWaiting: boolean;
    readonly isNotVoter: boolean;
    readonly isNoPermission: boolean;
    readonly isAlreadyDelegating: boolean;
    readonly isInsufficientFunds: boolean;
    readonly isNotDelegating: boolean;
    readonly isVotesExist: boolean;
    readonly isInstantNotAllowed: boolean;
    readonly isNonsense: boolean;
    readonly isWrongUpperBound: boolean;
    readonly isMaxVotesReached: boolean;
    readonly isTooMany: boolean;
    readonly isVotingPeriodLow: boolean;
    readonly isPreimageNotExist: boolean;
    readonly type: 'ValueLow' | 'ProposalMissing' | 'AlreadyCanceled' | 'DuplicateProposal' | 'ProposalBlacklisted' | 'NotSimpleMajority' | 'InvalidHash' | 'NoProposal' | 'AlreadyVetoed' | 'ReferendumInvalid' | 'NoneWaiting' | 'NotVoter' | 'NoPermission' | 'AlreadyDelegating' | 'InsufficientFunds' | 'NotDelegating' | 'VotesExist' | 'InstantNotAllowed' | 'Nonsense' | 'WrongUpperBound' | 'MaxVotesReached' | 'TooMany' | 'VotingPeriodLow' | 'PreimageNotExist';
  }

  /** @name PalletCollectiveVotes (680) */
  interface PalletCollectiveVotes extends Struct {
    readonly index: u32;
    readonly threshold: u32;
    readonly ayes: Vec<AccountId32>;
    readonly nays: Vec<AccountId32>;
    readonly end: u32;
  }

  /** @name PalletCollectiveError (681) */
  interface PalletCollectiveError extends Enum {
    readonly isNotMember: boolean;
    readonly isDuplicateProposal: boolean;
    readonly isProposalMissing: boolean;
    readonly isWrongIndex: boolean;
    readonly isDuplicateVote: boolean;
    readonly isAlreadyInitialized: boolean;
    readonly isTooEarly: boolean;
    readonly isTooManyProposals: boolean;
    readonly isWrongProposalWeight: boolean;
    readonly isWrongProposalLength: boolean;
    readonly isPrimeAccountNotMember: boolean;
    readonly isProposalActive: boolean;
    readonly type: 'NotMember' | 'DuplicateProposal' | 'ProposalMissing' | 'WrongIndex' | 'DuplicateVote' | 'AlreadyInitialized' | 'TooEarly' | 'TooManyProposals' | 'WrongProposalWeight' | 'WrongProposalLength' | 'PrimeAccountNotMember' | 'ProposalActive';
  }

  /** @name PalletElectionsPhragmenSeatHolder (685) */
  interface PalletElectionsPhragmenSeatHolder extends Struct {
    readonly who: AccountId32;
    readonly stake: u128;
    readonly deposit: u128;
  }

  /** @name PalletElectionsPhragmenVoter (686) */
  interface PalletElectionsPhragmenVoter extends Struct {
    readonly votes: Vec<AccountId32>;
    readonly stake: u128;
    readonly deposit: u128;
  }

  /** @name PalletElectionsPhragmenError (687) */
  interface PalletElectionsPhragmenError extends Enum {
    readonly isUnableToVote: boolean;
    readonly isNoVotes: boolean;
    readonly isTooManyVotes: boolean;
    readonly isMaximumVotesExceeded: boolean;
    readonly isLowBalance: boolean;
    readonly isUnableToPayBond: boolean;
    readonly isMustBeVoter: boolean;
    readonly isDuplicatedCandidate: boolean;
    readonly isTooManyCandidates: boolean;
    readonly isMemberSubmit: boolean;
    readonly isRunnerUpSubmit: boolean;
    readonly isInsufficientCandidateFunds: boolean;
    readonly isNotMember: boolean;
    readonly isInvalidWitnessData: boolean;
    readonly isInvalidVoteCount: boolean;
    readonly isInvalidRenouncing: boolean;
    readonly isInvalidReplacement: boolean;
    readonly type: 'UnableToVote' | 'NoVotes' | 'TooManyVotes' | 'MaximumVotesExceeded' | 'LowBalance' | 'UnableToPayBond' | 'MustBeVoter' | 'DuplicatedCandidate' | 'TooManyCandidates' | 'MemberSubmit' | 'RunnerUpSubmit' | 'InsufficientCandidateFunds' | 'NotMember' | 'InvalidWitnessData' | 'InvalidVoteCount' | 'InvalidRenouncing' | 'InvalidReplacement';
  }

  /** @name PalletMembershipError (689) */
  interface PalletMembershipError extends Enum {
    readonly isAlreadyMember: boolean;
    readonly isNotMember: boolean;
    readonly isTooManyMembers: boolean;
    readonly type: 'AlreadyMember' | 'NotMember' | 'TooManyMembers';
  }

  /** @name PalletGrandpaStoredState (690) */
  interface PalletGrandpaStoredState extends Enum {
    readonly isLive: boolean;
    readonly isPendingPause: boolean;
    readonly asPendingPause: {
      readonly scheduledAt: u32;
      readonly delay: u32;
    } & Struct;
    readonly isPaused: boolean;
    readonly isPendingResume: boolean;
    readonly asPendingResume: {
      readonly scheduledAt: u32;
      readonly delay: u32;
    } & Struct;
    readonly type: 'Live' | 'PendingPause' | 'Paused' | 'PendingResume';
  }

  /** @name PalletGrandpaStoredPendingChange (691) */
  interface PalletGrandpaStoredPendingChange extends Struct {
    readonly scheduledAt: u32;
    readonly delay: u32;
    readonly nextAuthorities: Vec<ITuple<[SpConsensusGrandpaAppPublic, u64]>>;
    readonly forced: Option<u32>;
  }

  /** @name PalletGrandpaError (693) */
  interface PalletGrandpaError extends Enum {
    readonly isPauseFailed: boolean;
    readonly isResumeFailed: boolean;
    readonly isChangePending: boolean;
    readonly isTooSoon: boolean;
    readonly isInvalidKeyOwnershipProof: boolean;
    readonly isInvalidEquivocationProof: boolean;
    readonly isDuplicateOffenceReport: boolean;
    readonly type: 'PauseFailed' | 'ResumeFailed' | 'ChangePending' | 'TooSoon' | 'InvalidKeyOwnershipProof' | 'InvalidEquivocationProof' | 'DuplicateOffenceReport';
  }

  /** @name PalletTreasuryProposal (694) */
  interface PalletTreasuryProposal extends Struct {
    readonly proposer: AccountId32;
    readonly value: u128;
    readonly beneficiary: AccountId32;
    readonly bond: u128;
  }

  /** @name PalletTreasurySpendStatus (696) */
  interface PalletTreasurySpendStatus extends Struct {
    readonly assetKind: FrameSupportTokensFungibleUnionOfNativeOrWithId;
    readonly amount: u128;
    readonly beneficiary: AccountId32;
    readonly validFrom: u32;
    readonly expireAt: u32;
    readonly status: PalletTreasuryPaymentState;
  }

  /** @name PalletTreasuryPaymentState (697) */
  interface PalletTreasuryPaymentState extends Enum {
    readonly isPending: boolean;
    readonly isAttempted: boolean;
    readonly asAttempted: {
      readonly id: Null;
    } & Struct;
    readonly isFailed: boolean;
    readonly type: 'Pending' | 'Attempted' | 'Failed';
  }

  /** @name FrameSupportPalletId (698) */
  interface FrameSupportPalletId extends U8aFixed {}

  /** @name PalletTreasuryError (699) */
  interface PalletTreasuryError extends Enum {
    readonly isInvalidIndex: boolean;
    readonly isTooManyApprovals: boolean;
    readonly isInsufficientPermission: boolean;
    readonly isProposalNotApproved: boolean;
    readonly isFailedToConvertBalance: boolean;
    readonly isSpendExpired: boolean;
    readonly isEarlyPayout: boolean;
    readonly isAlreadyAttempted: boolean;
    readonly isPayoutError: boolean;
    readonly isNotAttempted: boolean;
    readonly isInconclusive: boolean;
    readonly type: 'InvalidIndex' | 'TooManyApprovals' | 'InsufficientPermission' | 'ProposalNotApproved' | 'FailedToConvertBalance' | 'SpendExpired' | 'EarlyPayout' | 'AlreadyAttempted' | 'PayoutError' | 'NotAttempted' | 'Inconclusive';
  }

  /** @name PalletAssetRateError (700) */
  interface PalletAssetRateError extends Enum {
    readonly isUnknownAssetKind: boolean;
    readonly isAlreadyExists: boolean;
    readonly isOverflow: boolean;
    readonly type: 'UnknownAssetKind' | 'AlreadyExists' | 'Overflow';
  }

  /** @name PalletContractsWasmCodeInfo (702) */
  interface PalletContractsWasmCodeInfo extends Struct {
    readonly owner: AccountId32;
    readonly deposit: Compact<u128>;
    readonly refcount: Compact<u64>;
    readonly determinism: PalletContractsWasmDeterminism;
    readonly codeLen: u32;
  }

  /** @name PalletContractsStorageContractInfo (703) */
  interface PalletContractsStorageContractInfo extends Struct {
    readonly trieId: Bytes;
    readonly codeHash: H256;
    readonly storageBytes: u32;
    readonly storageItems: u32;
    readonly storageByteDeposit: u128;
    readonly storageItemDeposit: u128;
    readonly storageBaseDeposit: u128;
    readonly delegateDependencies: BTreeMap<H256, u128>;
  }

  /** @name PalletContractsStorageDeletionQueueManager (708) */
  interface PalletContractsStorageDeletionQueueManager extends Struct {
    readonly insertCounter: u32;
    readonly deleteCounter: u32;
  }

  /** @name PalletContractsSchedule (710) */
  interface PalletContractsSchedule extends Struct {
    readonly limits: PalletContractsScheduleLimits;
    readonly instructionWeights: PalletContractsScheduleInstructionWeights;
  }

  /** @name PalletContractsScheduleLimits (711) */
  interface PalletContractsScheduleLimits extends Struct {
    readonly eventTopics: u32;
    readonly memoryPages: u32;
    readonly subjectLen: u32;
    readonly payloadLen: u32;
    readonly runtimeMemory: u32;
    readonly validatorRuntimeMemory: u32;
    readonly eventRefTime: u64;
  }

  /** @name PalletContractsScheduleInstructionWeights (712) */
  interface PalletContractsScheduleInstructionWeights extends Struct {
    readonly base: u32;
  }

  /** @name PalletContractsEnvironment (713) */
  interface PalletContractsEnvironment extends Struct {
    readonly accountId: PalletContractsEnvironmentTypeAccountId32;
    readonly balance: PalletContractsEnvironmentTypeU128;
    readonly hash_: PalletContractsEnvironmentTypeH256;
    readonly hasher: PalletContractsEnvironmentTypeBlakeTwo256;
    readonly timestamp: PalletContractsEnvironmentTypeU64;
    readonly blockNumber: PalletContractsEnvironmentTypeU32;
  }

  /** @name PalletContractsEnvironmentTypeAccountId32 (714) */
  type PalletContractsEnvironmentTypeAccountId32 = Null;

  /** @name PalletContractsEnvironmentTypeU128 (715) */
  type PalletContractsEnvironmentTypeU128 = Null;

  /** @name PalletContractsEnvironmentTypeH256 (716) */
  type PalletContractsEnvironmentTypeH256 = Null;

  /** @name PalletContractsEnvironmentTypeBlakeTwo256 (717) */
  type PalletContractsEnvironmentTypeBlakeTwo256 = Null;

  /** @name PalletContractsEnvironmentTypeU64 (718) */
  type PalletContractsEnvironmentTypeU64 = Null;

  /** @name PalletContractsEnvironmentTypeU32 (719) */
  type PalletContractsEnvironmentTypeU32 = Null;

  /** @name PalletContractsError (721) */
  interface PalletContractsError extends Enum {
    readonly isInvalidSchedule: boolean;
    readonly isInvalidCallFlags: boolean;
    readonly isOutOfGas: boolean;
    readonly isOutputBufferTooSmall: boolean;
    readonly isTransferFailed: boolean;
    readonly isMaxCallDepthReached: boolean;
    readonly isContractNotFound: boolean;
    readonly isCodeTooLarge: boolean;
    readonly isCodeNotFound: boolean;
    readonly isCodeInfoNotFound: boolean;
    readonly isOutOfBounds: boolean;
    readonly isDecodingFailed: boolean;
    readonly isContractTrapped: boolean;
    readonly isValueTooLarge: boolean;
    readonly isTerminatedWhileReentrant: boolean;
    readonly isInputForwarded: boolean;
    readonly isRandomSubjectTooLong: boolean;
    readonly isTooManyTopics: boolean;
    readonly isNoChainExtension: boolean;
    readonly isXcmDecodeFailed: boolean;
    readonly isDuplicateContract: boolean;
    readonly isTerminatedInConstructor: boolean;
    readonly isReentranceDenied: boolean;
    readonly isStateChangeDenied: boolean;
    readonly isStorageDepositNotEnoughFunds: boolean;
    readonly isStorageDepositLimitExhausted: boolean;
    readonly isCodeInUse: boolean;
    readonly isContractReverted: boolean;
    readonly isCodeRejected: boolean;
    readonly isIndeterministic: boolean;
    readonly isMigrationInProgress: boolean;
    readonly isNoMigrationPerformed: boolean;
    readonly isMaxDelegateDependenciesReached: boolean;
    readonly isDelegateDependencyNotFound: boolean;
    readonly isDelegateDependencyAlreadyExists: boolean;
    readonly isCannotAddSelfAsDelegateDependency: boolean;
    readonly isOutOfTransientStorage: boolean;
    readonly type: 'InvalidSchedule' | 'InvalidCallFlags' | 'OutOfGas' | 'OutputBufferTooSmall' | 'TransferFailed' | 'MaxCallDepthReached' | 'ContractNotFound' | 'CodeTooLarge' | 'CodeNotFound' | 'CodeInfoNotFound' | 'OutOfBounds' | 'DecodingFailed' | 'ContractTrapped' | 'ValueTooLarge' | 'TerminatedWhileReentrant' | 'InputForwarded' | 'RandomSubjectTooLong' | 'TooManyTopics' | 'NoChainExtension' | 'XcmDecodeFailed' | 'DuplicateContract' | 'TerminatedInConstructor' | 'ReentranceDenied' | 'StateChangeDenied' | 'StorageDepositNotEnoughFunds' | 'StorageDepositLimitExhausted' | 'CodeInUse' | 'ContractReverted' | 'CodeRejected' | 'Indeterministic' | 'MigrationInProgress' | 'NoMigrationPerformed' | 'MaxDelegateDependenciesReached' | 'DelegateDependencyNotFound' | 'DelegateDependencyAlreadyExists' | 'CannotAddSelfAsDelegateDependency' | 'OutOfTransientStorage';
  }

  /** @name PalletSudoError (722) */
  interface PalletSudoError extends Enum {
    readonly isRequireSudo: boolean;
    readonly type: 'RequireSudo';
  }

  /** @name PalletImOnlineError (725) */
  interface PalletImOnlineError extends Enum {
    readonly isInvalidKey: boolean;
    readonly isDuplicatedHeartbeat: boolean;
    readonly type: 'InvalidKey' | 'DuplicatedHeartbeat';
  }

  /** @name SpStakingOffenceOffenceDetails (728) */
  interface SpStakingOffenceOffenceDetails extends Struct {
    readonly offender: ITuple<[AccountId32, Null]>;
    readonly reporters: Vec<AccountId32>;
  }

  /** @name PalletIdentityRegistration (732) */
  interface PalletIdentityRegistration extends Struct {
    readonly judgements: Vec<ITuple<[u32, PalletIdentityJudgement]>>;
    readonly deposit: u128;
    readonly info: PalletIdentityLegacyIdentityInfo;
  }

  /** @name PalletIdentityRegistrarInfo (740) */
  interface PalletIdentityRegistrarInfo extends Struct {
    readonly account: AccountId32;
    readonly fee: u128;
    readonly fields: u64;
  }

  /** @name PalletIdentityAuthorityProperties (743) */
  interface PalletIdentityAuthorityProperties extends Struct {
    readonly accountId: AccountId32;
    readonly allocation: u32;
  }

  /** @name PalletIdentityUsernameInformation (744) */
  interface PalletIdentityUsernameInformation extends Struct {
    readonly owner: AccountId32;
    readonly provider: PalletIdentityProvider;
  }

  /** @name PalletIdentityProvider (745) */
  interface PalletIdentityProvider extends Enum {
    readonly isAllocation: boolean;
    readonly isAuthorityDeposit: boolean;
    readonly asAuthorityDeposit: u128;
    readonly isSystem: boolean;
    readonly type: 'Allocation' | 'AuthorityDeposit' | 'System';
  }

  /** @name PalletIdentityError (747) */
  interface PalletIdentityError extends Enum {
    readonly isTooManySubAccounts: boolean;
    readonly isNotFound: boolean;
    readonly isNotNamed: boolean;
    readonly isEmptyIndex: boolean;
    readonly isFeeChanged: boolean;
    readonly isNoIdentity: boolean;
    readonly isStickyJudgement: boolean;
    readonly isJudgementGiven: boolean;
    readonly isInvalidJudgement: boolean;
    readonly isInvalidIndex: boolean;
    readonly isInvalidTarget: boolean;
    readonly isTooManyRegistrars: boolean;
    readonly isAlreadyClaimed: boolean;
    readonly isNotSub: boolean;
    readonly isNotOwned: boolean;
    readonly isJudgementForDifferentIdentity: boolean;
    readonly isJudgementPaymentFailed: boolean;
    readonly isInvalidSuffix: boolean;
    readonly isNotUsernameAuthority: boolean;
    readonly isNoAllocation: boolean;
    readonly isInvalidSignature: boolean;
    readonly isRequiresSignature: boolean;
    readonly isInvalidUsername: boolean;
    readonly isUsernameTaken: boolean;
    readonly isNoUsername: boolean;
    readonly isNotExpired: boolean;
    readonly isTooEarly: boolean;
    readonly isNotUnbinding: boolean;
    readonly isAlreadyUnbinding: boolean;
    readonly isInsufficientPrivileges: boolean;
    readonly type: 'TooManySubAccounts' | 'NotFound' | 'NotNamed' | 'EmptyIndex' | 'FeeChanged' | 'NoIdentity' | 'StickyJudgement' | 'JudgementGiven' | 'InvalidJudgement' | 'InvalidIndex' | 'InvalidTarget' | 'TooManyRegistrars' | 'AlreadyClaimed' | 'NotSub' | 'NotOwned' | 'JudgementForDifferentIdentity' | 'JudgementPaymentFailed' | 'InvalidSuffix' | 'NotUsernameAuthority' | 'NoAllocation' | 'InvalidSignature' | 'RequiresSignature' | 'InvalidUsername' | 'UsernameTaken' | 'NoUsername' | 'NotExpired' | 'TooEarly' | 'NotUnbinding' | 'AlreadyUnbinding' | 'InsufficientPrivileges';
  }

  /** @name PalletSocietyMemberRecord (748) */
  interface PalletSocietyMemberRecord extends Struct {
    readonly rank: u32;
    readonly strikes: u32;
    readonly vouching: Option<PalletSocietyVouchingStatus>;
    readonly index: u32;
  }

  /** @name PalletSocietyVouchingStatus (750) */
  interface PalletSocietyVouchingStatus extends Enum {
    readonly isVouching: boolean;
    readonly isBanned: boolean;
    readonly type: 'Vouching' | 'Banned';
  }

  /** @name PalletSocietyPayoutRecord (751) */
  interface PalletSocietyPayoutRecord extends Struct {
    readonly paid: u128;
    readonly payouts: Vec<ITuple<[u32, u128]>>;
  }

  /** @name PalletSocietyBid (756) */
  interface PalletSocietyBid extends Struct {
    readonly who: AccountId32;
    readonly kind: PalletSocietyBidKind;
    readonly value: u128;
  }

  /** @name PalletSocietyBidKind (757) */
  interface PalletSocietyBidKind extends Enum {
    readonly isDeposit: boolean;
    readonly asDeposit: u128;
    readonly isVouch: boolean;
    readonly asVouch: ITuple<[AccountId32, u128]>;
    readonly type: 'Deposit' | 'Vouch';
  }

  /** @name PalletSocietyCandidacy (759) */
  interface PalletSocietyCandidacy extends Struct {
    readonly round: u32;
    readonly kind: PalletSocietyBidKind;
    readonly bid: u128;
    readonly tally: PalletSocietyTally;
    readonly skepticStruck: bool;
  }

  /** @name PalletSocietyTally (760) */
  interface PalletSocietyTally extends Struct {
    readonly approvals: u32;
    readonly rejections: u32;
  }

  /** @name PalletSocietyVote (762) */
  interface PalletSocietyVote extends Struct {
    readonly approve: bool;
    readonly weight: u32;
  }

  /** @name PalletSocietyIntakeRecord (764) */
  interface PalletSocietyIntakeRecord extends Struct {
    readonly who: AccountId32;
    readonly bid: u128;
    readonly round: u32;
  }

  /** @name PalletSocietyError (766) */
  interface PalletSocietyError extends Enum {
    readonly isNotMember: boolean;
    readonly isAlreadyMember: boolean;
    readonly isSuspended: boolean;
    readonly isNotSuspended: boolean;
    readonly isNoPayout: boolean;
    readonly isAlreadyFounded: boolean;
    readonly isInsufficientPot: boolean;
    readonly isAlreadyVouching: boolean;
    readonly isNotVouchingOnBidder: boolean;
    readonly isHead: boolean;
    readonly isFounder: boolean;
    readonly isAlreadyBid: boolean;
    readonly isAlreadyCandidate: boolean;
    readonly isNotCandidate: boolean;
    readonly isMaxMembers: boolean;
    readonly isNotFounder: boolean;
    readonly isNotHead: boolean;
    readonly isNotApproved: boolean;
    readonly isNotRejected: boolean;
    readonly isApproved: boolean;
    readonly isRejected: boolean;
    readonly isInProgress: boolean;
    readonly isTooEarly: boolean;
    readonly isVoted: boolean;
    readonly isExpired: boolean;
    readonly isNotBidder: boolean;
    readonly isNoDefender: boolean;
    readonly isNotGroup: boolean;
    readonly isAlreadyElevated: boolean;
    readonly isAlreadyPunished: boolean;
    readonly isInsufficientFunds: boolean;
    readonly isNoVotes: boolean;
    readonly type: 'NotMember' | 'AlreadyMember' | 'Suspended' | 'NotSuspended' | 'NoPayout' | 'AlreadyFounded' | 'InsufficientPot' | 'AlreadyVouching' | 'NotVouchingOnBidder' | 'Head' | 'Founder' | 'AlreadyBid' | 'AlreadyCandidate' | 'NotCandidate' | 'MaxMembers' | 'NotFounder' | 'NotHead' | 'NotApproved' | 'NotRejected' | 'Approved' | 'Rejected' | 'InProgress' | 'TooEarly' | 'Voted' | 'Expired' | 'NotBidder' | 'NoDefender' | 'NotGroup' | 'AlreadyElevated' | 'AlreadyPunished' | 'InsufficientFunds' | 'NoVotes';
  }

  /** @name PalletRecoveryRecoveryConfig (767) */
  interface PalletRecoveryRecoveryConfig extends Struct {
    readonly delayPeriod: u32;
    readonly deposit: u128;
    readonly friends: Vec<AccountId32>;
    readonly threshold: u16;
  }

  /** @name PalletRecoveryActiveRecovery (769) */
  interface PalletRecoveryActiveRecovery extends Struct {
    readonly created: u32;
    readonly deposit: u128;
    readonly friends: Vec<AccountId32>;
  }

  /** @name PalletRecoveryError (770) */
  interface PalletRecoveryError extends Enum {
    readonly isNotAllowed: boolean;
    readonly isZeroThreshold: boolean;
    readonly isNotEnoughFriends: boolean;
    readonly isMaxFriends: boolean;
    readonly isNotSorted: boolean;
    readonly isNotRecoverable: boolean;
    readonly isAlreadyRecoverable: boolean;
    readonly isAlreadyStarted: boolean;
    readonly isNotStarted: boolean;
    readonly isNotFriend: boolean;
    readonly isDelayPeriod: boolean;
    readonly isAlreadyVouched: boolean;
    readonly isThreshold: boolean;
    readonly isStillActive: boolean;
    readonly isAlreadyProxy: boolean;
    readonly isBadState: boolean;
    readonly type: 'NotAllowed' | 'ZeroThreshold' | 'NotEnoughFriends' | 'MaxFriends' | 'NotSorted' | 'NotRecoverable' | 'AlreadyRecoverable' | 'AlreadyStarted' | 'NotStarted' | 'NotFriend' | 'DelayPeriod' | 'AlreadyVouched' | 'Threshold' | 'StillActive' | 'AlreadyProxy' | 'BadState';
  }

  /** @name PalletVestingReleases (773) */
  interface PalletVestingReleases extends Enum {
    readonly isV0: boolean;
    readonly isV1: boolean;
    readonly type: 'V0' | 'V1';
  }

  /** @name PalletVestingError (774) */
  interface PalletVestingError extends Enum {
    readonly isNotVesting: boolean;
    readonly isAtMaxVestingSchedules: boolean;
    readonly isAmountLow: boolean;
    readonly isScheduleIndexOutOfBounds: boolean;
    readonly isInvalidScheduleParams: boolean;
    readonly type: 'NotVesting' | 'AtMaxVestingSchedules' | 'AmountLow' | 'ScheduleIndexOutOfBounds' | 'InvalidScheduleParams';
  }

  /** @name PalletSchedulerScheduled (777) */
  interface PalletSchedulerScheduled extends Struct {
    readonly maybeId: Option<U8aFixed>;
    readonly priority: u8;
    readonly call: FrameSupportPreimagesBounded;
    readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
    readonly origin: KitchensinkRuntimeOriginCaller;
  }

  /** @name PalletSchedulerRetryConfig (779) */
  interface PalletSchedulerRetryConfig extends Struct {
    readonly totalRetries: u8;
    readonly remaining: u8;
    readonly period: u32;
  }

  /** @name PalletSchedulerError (780) */
  interface PalletSchedulerError extends Enum {
    readonly isFailedToSchedule: boolean;
    readonly isNotFound: boolean;
    readonly isTargetBlockNumberInPast: boolean;
    readonly isRescheduleNoChange: boolean;
    readonly isNamed: boolean;
    readonly type: 'FailedToSchedule' | 'NotFound' | 'TargetBlockNumberInPast' | 'RescheduleNoChange' | 'Named';
  }

  /** @name PalletGluttonError (781) */
  interface PalletGluttonError extends Enum {
    readonly isAlreadyInitialized: boolean;
    readonly isInsaneLimit: boolean;
    readonly type: 'AlreadyInitialized' | 'InsaneLimit';
  }

  /** @name PalletPreimageOldRequestStatus (782) */
  interface PalletPreimageOldRequestStatus extends Enum {
    readonly isUnrequested: boolean;
    readonly asUnrequested: {
      readonly deposit: ITuple<[AccountId32, u128]>;
      readonly len: u32;
    } & Struct;
    readonly isRequested: boolean;
    readonly asRequested: {
      readonly deposit: Option<ITuple<[AccountId32, u128]>>;
      readonly count: u32;
      readonly len: Option<u32>;
    } & Struct;
    readonly type: 'Unrequested' | 'Requested';
  }

  /** @name PalletPreimageRequestStatus (784) */
  interface PalletPreimageRequestStatus extends Enum {
    readonly isUnrequested: boolean;
    readonly asUnrequested: {
      readonly ticket: ITuple<[AccountId32, u128]>;
      readonly len: u32;
    } & Struct;
    readonly isRequested: boolean;
    readonly asRequested: {
      readonly maybeTicket: Option<ITuple<[AccountId32, u128]>>;
      readonly count: u32;
      readonly maybeLen: Option<u32>;
    } & Struct;
    readonly type: 'Unrequested' | 'Requested';
  }

  /** @name PalletPreimageError (789) */
  interface PalletPreimageError extends Enum {
    readonly isTooBig: boolean;
    readonly isAlreadyNoted: boolean;
    readonly isNotAuthorized: boolean;
    readonly isNotNoted: boolean;
    readonly isRequested: boolean;
    readonly isNotRequested: boolean;
    readonly isTooMany: boolean;
    readonly isTooFew: boolean;
    readonly type: 'TooBig' | 'AlreadyNoted' | 'NotAuthorized' | 'NotNoted' | 'Requested' | 'NotRequested' | 'TooMany' | 'TooFew';
  }

  /** @name PalletProxyProxyDefinition (792) */
  interface PalletProxyProxyDefinition extends Struct {
    readonly delegate: AccountId32;
    readonly proxyType: KitchensinkRuntimeProxyType;
    readonly delay: u32;
  }

  /** @name PalletProxyAnnouncement (796) */
  interface PalletProxyAnnouncement extends Struct {
    readonly real: AccountId32;
    readonly callHash: H256;
    readonly height: u32;
  }

  /** @name PalletProxyError (798) */
  interface PalletProxyError extends Enum {
    readonly isTooMany: boolean;
    readonly isNotFound: boolean;
    readonly isNotProxy: boolean;
    readonly isUnproxyable: boolean;
    readonly isDuplicate: boolean;
    readonly isNoPermission: boolean;
    readonly isUnannounced: boolean;
    readonly isNoSelfProxy: boolean;
    readonly type: 'TooMany' | 'NotFound' | 'NotProxy' | 'Unproxyable' | 'Duplicate' | 'NoPermission' | 'Unannounced' | 'NoSelfProxy';
  }

  /** @name PalletMultisigMultisig (800) */
  interface PalletMultisigMultisig extends Struct {
    readonly when: PalletMultisigTimepoint;
    readonly deposit: u128;
    readonly depositor: AccountId32;
    readonly approvals: Vec<AccountId32>;
  }

  /** @name PalletMultisigError (801) */
  interface PalletMultisigError extends Enum {
    readonly isMinimumThreshold: boolean;
    readonly isAlreadyApproved: boolean;
    readonly isNoApprovalsNeeded: boolean;
    readonly isTooFewSignatories: boolean;
    readonly isTooManySignatories: boolean;
    readonly isSignatoriesOutOfOrder: boolean;
    readonly isSenderInSignatories: boolean;
    readonly isNotFound: boolean;
    readonly isNotOwner: boolean;
    readonly isNoTimepoint: boolean;
    readonly isWrongTimepoint: boolean;
    readonly isUnexpectedTimepoint: boolean;
    readonly isMaxWeightTooLow: boolean;
    readonly isAlreadyStored: boolean;
    readonly type: 'MinimumThreshold' | 'AlreadyApproved' | 'NoApprovalsNeeded' | 'TooFewSignatories' | 'TooManySignatories' | 'SignatoriesOutOfOrder' | 'SenderInSignatories' | 'NotFound' | 'NotOwner' | 'NoTimepoint' | 'WrongTimepoint' | 'UnexpectedTimepoint' | 'MaxWeightTooLow' | 'AlreadyStored';
  }

  /** @name PalletBountiesBounty (802) */
  interface PalletBountiesBounty extends Struct {
    readonly proposer: AccountId32;
    readonly value: u128;
    readonly fee: u128;
    readonly curatorDeposit: u128;
    readonly bond: u128;
    readonly status: PalletBountiesBountyStatus;
  }

  /** @name PalletBountiesBountyStatus (803) */
  interface PalletBountiesBountyStatus extends Enum {
    readonly isProposed: boolean;
    readonly isApproved: boolean;
    readonly isFunded: boolean;
    readonly isCuratorProposed: boolean;
    readonly asCuratorProposed: {
      readonly curator: AccountId32;
    } & Struct;
    readonly isActive: boolean;
    readonly asActive: {
      readonly curator: AccountId32;
      readonly updateDue: u32;
    } & Struct;
    readonly isPendingPayout: boolean;
    readonly asPendingPayout: {
      readonly curator: AccountId32;
      readonly beneficiary: AccountId32;
      readonly unlockAt: u32;
    } & Struct;
    readonly isApprovedWithCurator: boolean;
    readonly asApprovedWithCurator: {
      readonly curator: AccountId32;
    } & Struct;
    readonly type: 'Proposed' | 'Approved' | 'Funded' | 'CuratorProposed' | 'Active' | 'PendingPayout' | 'ApprovedWithCurator';
  }

  /** @name PalletBountiesError (805) */
  interface PalletBountiesError extends Enum {
    readonly isInsufficientProposersBalance: boolean;
    readonly isInvalidIndex: boolean;
    readonly isReasonTooBig: boolean;
    readonly isUnexpectedStatus: boolean;
    readonly isRequireCurator: boolean;
    readonly isInvalidValue: boolean;
    readonly isInvalidFee: boolean;
    readonly isPendingPayout: boolean;
    readonly isPremature: boolean;
    readonly isHasActiveChildBounty: boolean;
    readonly isTooManyQueued: boolean;
    readonly type: 'InsufficientProposersBalance' | 'InvalidIndex' | 'ReasonTooBig' | 'UnexpectedStatus' | 'RequireCurator' | 'InvalidValue' | 'InvalidFee' | 'PendingPayout' | 'Premature' | 'HasActiveChildBounty' | 'TooManyQueued';
  }

  /** @name PalletTipsOpenTip (806) */
  interface PalletTipsOpenTip extends Struct {
    readonly reason: H256;
    readonly who: AccountId32;
    readonly finder: AccountId32;
    readonly deposit: u128;
    readonly closes: Option<u32>;
    readonly tips: Vec<ITuple<[AccountId32, u128]>>;
    readonly findersFee: bool;
  }

  /** @name PalletTipsError (807) */
  interface PalletTipsError extends Enum {
    readonly isReasonTooBig: boolean;
    readonly isAlreadyKnown: boolean;
    readonly isUnknownTip: boolean;
    readonly isMaxTipAmountExceeded: boolean;
    readonly isNotFinder: boolean;
    readonly isStillOpen: boolean;
    readonly isPremature: boolean;
    readonly type: 'ReasonTooBig' | 'AlreadyKnown' | 'UnknownTip' | 'MaxTipAmountExceeded' | 'NotFinder' | 'StillOpen' | 'Premature';
  }

  /** @name PalletAssetsAssetDetails (808) */
  interface PalletAssetsAssetDetails extends Struct {
    readonly owner: AccountId32;
    readonly issuer: AccountId32;
    readonly admin: AccountId32;
    readonly freezer: AccountId32;
    readonly supply: u128;
    readonly deposit: u128;
    readonly minBalance: u128;
    readonly isSufficient: bool;
    readonly accounts: u32;
    readonly sufficients: u32;
    readonly approvals: u32;
    readonly status: PalletAssetsAssetStatus;
  }

  /** @name PalletAssetsAssetStatus (809) */
  interface PalletAssetsAssetStatus extends Enum {
    readonly isLive: boolean;
    readonly isFrozen: boolean;
    readonly isDestroying: boolean;
    readonly type: 'Live' | 'Frozen' | 'Destroying';
  }

  /** @name PalletAssetsAssetAccount (810) */
  interface PalletAssetsAssetAccount extends Struct {
    readonly balance: u128;
    readonly status: PalletAssetsAccountStatus;
    readonly reason: PalletAssetsExistenceReason;
    readonly extra: Null;
  }

  /** @name PalletAssetsAccountStatus (811) */
  interface PalletAssetsAccountStatus extends Enum {
    readonly isLiquid: boolean;
    readonly isFrozen: boolean;
    readonly isBlocked: boolean;
    readonly type: 'Liquid' | 'Frozen' | 'Blocked';
  }

  /** @name PalletAssetsExistenceReason (812) */
  interface PalletAssetsExistenceReason extends Enum {
    readonly isConsumer: boolean;
    readonly isSufficient: boolean;
    readonly isDepositHeld: boolean;
    readonly asDepositHeld: u128;
    readonly isDepositRefunded: boolean;
    readonly isDepositFrom: boolean;
    readonly asDepositFrom: ITuple<[AccountId32, u128]>;
    readonly type: 'Consumer' | 'Sufficient' | 'DepositHeld' | 'DepositRefunded' | 'DepositFrom';
  }

  /** @name PalletAssetsApproval (814) */
  interface PalletAssetsApproval extends Struct {
    readonly amount: u128;
    readonly deposit: u128;
  }

  /** @name PalletAssetsAssetMetadata (815) */
  interface PalletAssetsAssetMetadata extends Struct {
    readonly deposit: u128;
    readonly name: Bytes;
    readonly symbol: Bytes;
    readonly decimals: u8;
    readonly isFrozen: bool;
  }

  /** @name PalletAssetsError (817) */
  interface PalletAssetsError extends Enum {
    readonly isBalanceLow: boolean;
    readonly isNoAccount: boolean;
    readonly isNoPermission: boolean;
    readonly isUnknown: boolean;
    readonly isFrozen: boolean;
    readonly isInUse: boolean;
    readonly isBadWitness: boolean;
    readonly isMinBalanceZero: boolean;
    readonly isUnavailableConsumer: boolean;
    readonly isBadMetadata: boolean;
    readonly isUnapproved: boolean;
    readonly isWouldDie: boolean;
    readonly isAlreadyExists: boolean;
    readonly isNoDeposit: boolean;
    readonly isWouldBurn: boolean;
    readonly isLiveAsset: boolean;
    readonly isAssetNotLive: boolean;
    readonly isIncorrectStatus: boolean;
    readonly isNotFrozen: boolean;
    readonly isCallbackFailed: boolean;
    readonly isBadAssetId: boolean;
    readonly isContainsFreezes: boolean;
    readonly isContainsHolds: boolean;
    readonly type: 'BalanceLow' | 'NoAccount' | 'NoPermission' | 'Unknown' | 'Frozen' | 'InUse' | 'BadWitness' | 'MinBalanceZero' | 'UnavailableConsumer' | 'BadMetadata' | 'Unapproved' | 'WouldDie' | 'AlreadyExists' | 'NoDeposit' | 'WouldBurn' | 'LiveAsset' | 'AssetNotLive' | 'IncorrectStatus' | 'NotFrozen' | 'CallbackFailed' | 'BadAssetId' | 'ContainsFreezes' | 'ContainsHolds';
  }

  /** @name PalletBeefyError (821) */
  interface PalletBeefyError extends Enum {
    readonly isInvalidKeyOwnershipProof: boolean;
    readonly isInvalidDoubleVotingProof: boolean;
    readonly isInvalidForkVotingProof: boolean;
    readonly isInvalidFutureBlockVotingProof: boolean;
    readonly isInvalidEquivocationProofSession: boolean;
    readonly isDuplicateOffenceReport: boolean;
    readonly isInvalidConfiguration: boolean;
    readonly type: 'InvalidKeyOwnershipProof' | 'InvalidDoubleVotingProof' | 'InvalidForkVotingProof' | 'InvalidFutureBlockVotingProof' | 'InvalidEquivocationProofSession' | 'DuplicateOffenceReport' | 'InvalidConfiguration';
  }

  /** @name SpConsensusBeefyMmrBeefyAuthoritySet (822) */
  interface SpConsensusBeefyMmrBeefyAuthoritySet extends Struct {
    readonly id: u64;
    readonly len: u32;
    readonly keysetCommitment: H256;
  }

  /** @name PalletLotteryLotteryConfig (823) */
  interface PalletLotteryLotteryConfig extends Struct {
    readonly price: u128;
    readonly start: u32;
    readonly length: u32;
    readonly delay: u32;
    readonly repeat: bool;
  }

  /** @name PalletLotteryError (827) */
  interface PalletLotteryError extends Enum {
    readonly isNotConfigured: boolean;
    readonly isInProgress: boolean;
    readonly isAlreadyEnded: boolean;
    readonly isInvalidCall: boolean;
    readonly isAlreadyParticipating: boolean;
    readonly isTooManyCalls: boolean;
    readonly isEncodingFailed: boolean;
    readonly type: 'NotConfigured' | 'InProgress' | 'AlreadyEnded' | 'InvalidCall' | 'AlreadyParticipating' | 'TooManyCalls' | 'EncodingFailed';
  }

  /** @name PalletNisBid (830) */
  interface PalletNisBid extends Struct {
    readonly amount: u128;
    readonly who: AccountId32;
  }

  /** @name PalletNisSummaryRecord (832) */
  interface PalletNisSummaryRecord extends Struct {
    readonly proportionOwed: Perquintill;
    readonly index: u32;
    readonly thawed: Perquintill;
    readonly lastPeriod: u32;
    readonly receiptsOnHold: u128;
  }

  /** @name PalletNisReceiptRecord (833) */
  interface PalletNisReceiptRecord extends Struct {
    readonly proportion: Perquintill;
    readonly owner: Option<ITuple<[AccountId32, u128]>>;
    readonly expiry: u32;
  }

  /** @name PalletNisError (835) */
  interface PalletNisError extends Enum {
    readonly isDurationTooSmall: boolean;
    readonly isDurationTooBig: boolean;
    readonly isAmountTooSmall: boolean;
    readonly isBidTooLow: boolean;
    readonly isUnknownReceipt: boolean;
    readonly isNotOwner: boolean;
    readonly isNotExpired: boolean;
    readonly isUnknownBid: boolean;
    readonly isPortionTooBig: boolean;
    readonly isUnfunded: boolean;
    readonly isAlreadyFunded: boolean;
    readonly isThrottled: boolean;
    readonly isMakesDust: boolean;
    readonly isAlreadyCommunal: boolean;
    readonly isAlreadyPrivate: boolean;
    readonly type: 'DurationTooSmall' | 'DurationTooBig' | 'AmountTooSmall' | 'BidTooLow' | 'UnknownReceipt' | 'NotOwner' | 'NotExpired' | 'UnknownBid' | 'PortionTooBig' | 'Unfunded' | 'AlreadyFunded' | 'Throttled' | 'MakesDust' | 'AlreadyCommunal' | 'AlreadyPrivate';
  }

  /** @name PalletUniquesCollectionDetails (836) */
  interface PalletUniquesCollectionDetails extends Struct {
    readonly owner: AccountId32;
    readonly issuer: AccountId32;
    readonly admin: AccountId32;
    readonly freezer: AccountId32;
    readonly totalDeposit: u128;
    readonly freeHolding: bool;
    readonly items: u32;
    readonly itemMetadatas: u32;
    readonly attributes: u32;
    readonly isFrozen: bool;
  }

  /** @name PalletUniquesItemDetails (838) */
  interface PalletUniquesItemDetails extends Struct {
    readonly owner: AccountId32;
    readonly approved: Option<AccountId32>;
    readonly isFrozen: bool;
    readonly deposit: u128;
  }

  /** @name PalletUniquesCollectionMetadata (839) */
  interface PalletUniquesCollectionMetadata extends Struct {
    readonly deposit: u128;
    readonly data: Bytes;
    readonly isFrozen: bool;
  }

  /** @name PalletUniquesItemMetadata (840) */
  interface PalletUniquesItemMetadata extends Struct {
    readonly deposit: u128;
    readonly data: Bytes;
    readonly isFrozen: bool;
  }

  /** @name PalletUniquesError (844) */
  interface PalletUniquesError extends Enum {
    readonly isNoPermission: boolean;
    readonly isUnknownCollection: boolean;
    readonly isAlreadyExists: boolean;
    readonly isWrongOwner: boolean;
    readonly isBadWitness: boolean;
    readonly isInUse: boolean;
    readonly isFrozen: boolean;
    readonly isWrongDelegate: boolean;
    readonly isNoDelegate: boolean;
    readonly isUnapproved: boolean;
    readonly isUnaccepted: boolean;
    readonly isLocked: boolean;
    readonly isMaxSupplyReached: boolean;
    readonly isMaxSupplyAlreadySet: boolean;
    readonly isMaxSupplyTooSmall: boolean;
    readonly isUnknownItem: boolean;
    readonly isNotForSale: boolean;
    readonly isBidTooLow: boolean;
    readonly type: 'NoPermission' | 'UnknownCollection' | 'AlreadyExists' | 'WrongOwner' | 'BadWitness' | 'InUse' | 'Frozen' | 'WrongDelegate' | 'NoDelegate' | 'Unapproved' | 'Unaccepted' | 'Locked' | 'MaxSupplyReached' | 'MaxSupplyAlreadySet' | 'MaxSupplyTooSmall' | 'UnknownItem' | 'NotForSale' | 'BidTooLow';
  }

  /** @name PalletNftsCollectionDetails (845) */
  interface PalletNftsCollectionDetails extends Struct {
    readonly owner: AccountId32;
    readonly ownerDeposit: u128;
    readonly items: u32;
    readonly itemMetadatas: u32;
    readonly itemConfigs: u32;
    readonly attributes: u32;
  }

  /** @name PalletNftsCollectionRole (847) */
  interface PalletNftsCollectionRole extends Enum {
    readonly isIssuer: boolean;
    readonly isFreezer: boolean;
    readonly isAdmin: boolean;
    readonly type: 'Issuer' | 'Freezer' | 'Admin';
  }

  /** @name PalletNftsItemDetails (848) */
  interface PalletNftsItemDetails extends Struct {
    readonly owner: AccountId32;
    readonly approvals: BTreeMap<AccountId32, Option<u32>>;
    readonly deposit: PalletNftsItemDeposit;
  }

  /** @name PalletNftsItemDeposit (849) */
  interface PalletNftsItemDeposit extends Struct {
    readonly account: AccountId32;
    readonly amount: u128;
  }

  /** @name PalletNftsCollectionMetadata (854) */
  interface PalletNftsCollectionMetadata extends Struct {
    readonly deposit: u128;
    readonly data: Bytes;
  }

  /** @name PalletNftsItemMetadata (855) */
  interface PalletNftsItemMetadata extends Struct {
    readonly deposit: PalletNftsItemMetadataDeposit;
    readonly data: Bytes;
  }

  /** @name PalletNftsItemMetadataDeposit (856) */
  interface PalletNftsItemMetadataDeposit extends Struct {
    readonly account: Option<AccountId32>;
    readonly amount: u128;
  }

  /** @name PalletNftsAttributeDeposit (859) */
  interface PalletNftsAttributeDeposit extends Struct {
    readonly account: Option<AccountId32>;
    readonly amount: u128;
  }

  /** @name PalletNftsPendingSwap (862) */
  interface PalletNftsPendingSwap extends Struct {
    readonly desiredCollection: u32;
    readonly desiredItem: Option<u32>;
    readonly price: Option<PalletNftsPriceWithDirection>;
    readonly deadline: u32;
  }

  /** @name PalletNftsPalletFeature (864) */
  interface PalletNftsPalletFeature extends Enum {
    readonly isTrading: boolean;
    readonly isAttributes: boolean;
    readonly isApprovals: boolean;
    readonly isSwaps: boolean;
    readonly type: 'Trading' | 'Attributes' | 'Approvals' | 'Swaps';
  }

  /** @name PalletNftsError (865) */
  interface PalletNftsError extends Enum {
    readonly isNoPermission: boolean;
    readonly isUnknownCollection: boolean;
    readonly isAlreadyExists: boolean;
    readonly isApprovalExpired: boolean;
    readonly isWrongOwner: boolean;
    readonly isBadWitness: boolean;
    readonly isCollectionIdInUse: boolean;
    readonly isItemsNonTransferable: boolean;
    readonly isNotDelegate: boolean;
    readonly isWrongDelegate: boolean;
    readonly isUnapproved: boolean;
    readonly isUnaccepted: boolean;
    readonly isItemLocked: boolean;
    readonly isLockedItemAttributes: boolean;
    readonly isLockedCollectionAttributes: boolean;
    readonly isLockedItemMetadata: boolean;
    readonly isLockedCollectionMetadata: boolean;
    readonly isMaxSupplyReached: boolean;
    readonly isMaxSupplyLocked: boolean;
    readonly isMaxSupplyTooSmall: boolean;
    readonly isUnknownItem: boolean;
    readonly isUnknownSwap: boolean;
    readonly isMetadataNotFound: boolean;
    readonly isAttributeNotFound: boolean;
    readonly isNotForSale: boolean;
    readonly isBidTooLow: boolean;
    readonly isReachedApprovalLimit: boolean;
    readonly isDeadlineExpired: boolean;
    readonly isWrongDuration: boolean;
    readonly isMethodDisabled: boolean;
    readonly isWrongSetting: boolean;
    readonly isInconsistentItemConfig: boolean;
    readonly isNoConfig: boolean;
    readonly isRolesNotCleared: boolean;
    readonly isMintNotStarted: boolean;
    readonly isMintEnded: boolean;
    readonly isAlreadyClaimed: boolean;
    readonly isIncorrectData: boolean;
    readonly isWrongOrigin: boolean;
    readonly isWrongSignature: boolean;
    readonly isIncorrectMetadata: boolean;
    readonly isMaxAttributesLimitReached: boolean;
    readonly isWrongNamespace: boolean;
    readonly isCollectionNotEmpty: boolean;
    readonly isWitnessRequired: boolean;
    readonly type: 'NoPermission' | 'UnknownCollection' | 'AlreadyExists' | 'ApprovalExpired' | 'WrongOwner' | 'BadWitness' | 'CollectionIdInUse' | 'ItemsNonTransferable' | 'NotDelegate' | 'WrongDelegate' | 'Unapproved' | 'Unaccepted' | 'ItemLocked' | 'LockedItemAttributes' | 'LockedCollectionAttributes' | 'LockedItemMetadata' | 'LockedCollectionMetadata' | 'MaxSupplyReached' | 'MaxSupplyLocked' | 'MaxSupplyTooSmall' | 'UnknownItem' | 'UnknownSwap' | 'MetadataNotFound' | 'AttributeNotFound' | 'NotForSale' | 'BidTooLow' | 'ReachedApprovalLimit' | 'DeadlineExpired' | 'WrongDuration' | 'MethodDisabled' | 'WrongSetting' | 'InconsistentItemConfig' | 'NoConfig' | 'RolesNotCleared' | 'MintNotStarted' | 'MintEnded' | 'AlreadyClaimed' | 'IncorrectData' | 'WrongOrigin' | 'WrongSignature' | 'IncorrectMetadata' | 'MaxAttributesLimitReached' | 'WrongNamespace' | 'CollectionNotEmpty' | 'WitnessRequired';
  }

  /** @name PalletNftFractionalizationDetails (866) */
  interface PalletNftFractionalizationDetails extends Struct {
    readonly asset: u32;
    readonly fractions: u128;
    readonly deposit: u128;
    readonly assetCreator: AccountId32;
  }

  /** @name PalletNftFractionalizationError (867) */
  interface PalletNftFractionalizationError extends Enum {
    readonly isIncorrectAssetId: boolean;
    readonly isNoPermission: boolean;
    readonly isNftNotFound: boolean;
    readonly isNftNotFractionalized: boolean;
    readonly type: 'IncorrectAssetId' | 'NoPermission' | 'NftNotFound' | 'NftNotFractionalized';
  }

  /** @name PalletSalaryStatusType (868) */
  interface PalletSalaryStatusType extends Struct {
    readonly cycleIndex: u32;
    readonly cycleStart: u32;
    readonly budget: u128;
    readonly totalRegistrations: u128;
    readonly totalUnregisteredPaid: u128;
  }

  /** @name PalletSalaryClaimantStatus (869) */
  interface PalletSalaryClaimantStatus extends Struct {
    readonly lastActive: u32;
    readonly status: PalletSalaryClaimState;
  }

  /** @name PalletSalaryClaimState (870) */
  interface PalletSalaryClaimState extends Enum {
    readonly isNothing: boolean;
    readonly isRegistered: boolean;
    readonly asRegistered: u128;
    readonly isAttempted: boolean;
    readonly asAttempted: {
      readonly registered: Option<u128>;
      readonly id: Null;
      readonly amount: u128;
    } & Struct;
    readonly type: 'Nothing' | 'Registered' | 'Attempted';
  }

  /** @name PalletSalaryError (871) */
  interface PalletSalaryError extends Enum {
    readonly isAlreadyStarted: boolean;
    readonly isNotMember: boolean;
    readonly isAlreadyInducted: boolean;
    readonly isNotInducted: boolean;
    readonly isNoClaim: boolean;
    readonly isClaimZero: boolean;
    readonly isTooLate: boolean;
    readonly isTooEarly: boolean;
    readonly isNotYet: boolean;
    readonly isNotStarted: boolean;
    readonly isBankrupt: boolean;
    readonly isPayError: boolean;
    readonly isInconclusive: boolean;
    readonly isNotCurrent: boolean;
    readonly type: 'AlreadyStarted' | 'NotMember' | 'AlreadyInducted' | 'NotInducted' | 'NoClaim' | 'ClaimZero' | 'TooLate' | 'TooEarly' | 'NotYet' | 'NotStarted' | 'Bankrupt' | 'PayError' | 'Inconclusive' | 'NotCurrent';
  }

  /** @name PalletCoreFellowshipMemberStatus (872) */
  interface PalletCoreFellowshipMemberStatus extends Struct {
    readonly isActive: bool;
    readonly lastPromotion: u32;
    readonly lastProof: u32;
  }

  /** @name PalletCoreFellowshipError (874) */
  interface PalletCoreFellowshipError extends Enum {
    readonly isUnranked: boolean;
    readonly isRanked: boolean;
    readonly isUnexpectedRank: boolean;
    readonly isInvalidRank: boolean;
    readonly isNoPermission: boolean;
    readonly isNothingDoing: boolean;
    readonly isAlreadyInducted: boolean;
    readonly isNotTracked: boolean;
    readonly isTooSoon: boolean;
    readonly type: 'Unranked' | 'Ranked' | 'UnexpectedRank' | 'InvalidRank' | 'NoPermission' | 'NothingDoing' | 'AlreadyInducted' | 'NotTracked' | 'TooSoon';
  }

  /** @name PalletTransactionStorageTransactionInfo (876) */
  interface PalletTransactionStorageTransactionInfo extends Struct {
    readonly chunkRoot: H256;
    readonly contentHash: H256;
    readonly size_: u32;
    readonly blockChunks: u32;
  }

  /** @name PalletTransactionStorageError (878) */
  interface PalletTransactionStorageError extends Enum {
    readonly isNotConfigured: boolean;
    readonly isRenewedNotFound: boolean;
    readonly isEmptyTransaction: boolean;
    readonly isUnexpectedProof: boolean;
    readonly isInvalidProof: boolean;
    readonly isMissingProof: boolean;
    readonly isMissingStateData: boolean;
    readonly isDoubleCheck: boolean;
    readonly isProofNotChecked: boolean;
    readonly isTransactionTooLarge: boolean;
    readonly isTooManyTransactions: boolean;
    readonly isBadContext: boolean;
    readonly type: 'NotConfigured' | 'RenewedNotFound' | 'EmptyTransaction' | 'UnexpectedProof' | 'InvalidProof' | 'MissingProof' | 'MissingStateData' | 'DoubleCheck' | 'ProofNotChecked' | 'TransactionTooLarge' | 'TooManyTransactions' | 'BadContext';
  }

  /** @name PalletBagsListListNode (879) */
  interface PalletBagsListListNode extends Struct {
    readonly id: AccountId32;
    readonly prev: Option<AccountId32>;
    readonly next: Option<AccountId32>;
    readonly bagUpper: u64;
    readonly score: u64;
  }

  /** @name PalletBagsListListBag (880) */
  interface PalletBagsListListBag extends Struct {
    readonly head: Option<AccountId32>;
    readonly tail: Option<AccountId32>;
  }

  /** @name PalletBagsListError (882) */
  interface PalletBagsListError extends Enum {
    readonly isList: boolean;
    readonly asList: PalletBagsListListListError;
    readonly type: 'List';
  }

  /** @name PalletBagsListListListError (883) */
  interface PalletBagsListListListError extends Enum {
    readonly isDuplicate: boolean;
    readonly isNotHeavier: boolean;
    readonly isNotInSameBag: boolean;
    readonly isNodeNotFound: boolean;
    readonly type: 'Duplicate' | 'NotHeavier' | 'NotInSameBag' | 'NodeNotFound';
  }

  /** @name PalletChildBountiesChildBounty (884) */
  interface PalletChildBountiesChildBounty extends Struct {
    readonly parentBounty: u32;
    readonly value: u128;
    readonly fee: u128;
    readonly curatorDeposit: u128;
    readonly status: PalletChildBountiesChildBountyStatus;
  }

  /** @name PalletChildBountiesChildBountyStatus (885) */
  interface PalletChildBountiesChildBountyStatus extends Enum {
    readonly isAdded: boolean;
    readonly isCuratorProposed: boolean;
    readonly asCuratorProposed: {
      readonly curator: AccountId32;
    } & Struct;
    readonly isActive: boolean;
    readonly asActive: {
      readonly curator: AccountId32;
    } & Struct;
    readonly isPendingPayout: boolean;
    readonly asPendingPayout: {
      readonly curator: AccountId32;
      readonly beneficiary: AccountId32;
      readonly unlockAt: u32;
    } & Struct;
    readonly type: 'Added' | 'CuratorProposed' | 'Active' | 'PendingPayout';
  }

  /** @name PalletChildBountiesError (886) */
  interface PalletChildBountiesError extends Enum {
    readonly isParentBountyNotActive: boolean;
    readonly isInsufficientBountyBalance: boolean;
    readonly isTooManyChildBounties: boolean;
    readonly type: 'ParentBountyNotActive' | 'InsufficientBountyBalance' | 'TooManyChildBounties';
  }

  /** @name PalletReferendaReferendumInfoConvictionVotingTally (887) */
  interface PalletReferendaReferendumInfoConvictionVotingTally extends Enum {
    readonly isOngoing: boolean;
    readonly asOngoing: PalletReferendaReferendumStatusConvictionVotingTally;
    readonly isApproved: boolean;
    readonly asApproved: ITuple<[u32, Option<PalletReferendaDeposit>, Option<PalletReferendaDeposit>]>;
    readonly isRejected: boolean;
    readonly asRejected: ITuple<[u32, Option<PalletReferendaDeposit>, Option<PalletReferendaDeposit>]>;
    readonly isCancelled: boolean;
    readonly asCancelled: ITuple<[u32, Option<PalletReferendaDeposit>, Option<PalletReferendaDeposit>]>;
    readonly isTimedOut: boolean;
    readonly asTimedOut: ITuple<[u32, Option<PalletReferendaDeposit>, Option<PalletReferendaDeposit>]>;
    readonly isKilled: boolean;
    readonly asKilled: u32;
    readonly type: 'Ongoing' | 'Approved' | 'Rejected' | 'Cancelled' | 'TimedOut' | 'Killed';
  }

  /** @name PalletReferendaReferendumStatusConvictionVotingTally (888) */
  interface PalletReferendaReferendumStatusConvictionVotingTally extends Struct {
    readonly track: u16;
    readonly origin: KitchensinkRuntimeOriginCaller;
    readonly proposal: FrameSupportPreimagesBounded;
    readonly enactment: FrameSupportScheduleDispatchTime;
    readonly submitted: u32;
    readonly submissionDeposit: PalletReferendaDeposit;
    readonly decisionDeposit: Option<PalletReferendaDeposit>;
    readonly deciding: Option<PalletReferendaDecidingStatus>;
    readonly tally: PalletConvictionVotingTally;
    readonly inQueue: bool;
    readonly alarm: Option<ITuple<[u32, ITuple<[u32, u32]>]>>;
  }

  /** @name PalletReferendaDeposit (889) */
  interface PalletReferendaDeposit extends Struct {
    readonly who: AccountId32;
    readonly amount: u128;
  }

  /** @name PalletReferendaDecidingStatus (892) */
  interface PalletReferendaDecidingStatus extends Struct {
    readonly since: u32;
    readonly confirming: Option<u32>;
  }

  /** @name PalletReferendaTrackDetails (898) */
  interface PalletReferendaTrackDetails extends Struct {
    readonly name: Text;
    readonly maxDeciding: u32;
    readonly decisionDeposit: u128;
    readonly preparePeriod: u32;
    readonly decisionPeriod: u32;
    readonly confirmPeriod: u32;
    readonly minEnactmentPeriod: u32;
    readonly minApproval: PalletReferendaCurve;
    readonly minSupport: PalletReferendaCurve;
  }

  /** @name PalletReferendaError (899) */
  interface PalletReferendaError extends Enum {
    readonly isNotOngoing: boolean;
    readonly isHasDeposit: boolean;
    readonly isBadTrack: boolean;
    readonly isFull: boolean;
    readonly isQueueEmpty: boolean;
    readonly isBadReferendum: boolean;
    readonly isNothingToDo: boolean;
    readonly isNoTrack: boolean;
    readonly isUnfinished: boolean;
    readonly isNoPermission: boolean;
    readonly isNoDeposit: boolean;
    readonly isBadStatus: boolean;
    readonly isPreimageNotExist: boolean;
    readonly isPreimageStoredWithDifferentLength: boolean;
    readonly type: 'NotOngoing' | 'HasDeposit' | 'BadTrack' | 'Full' | 'QueueEmpty' | 'BadReferendum' | 'NothingToDo' | 'NoTrack' | 'Unfinished' | 'NoPermission' | 'NoDeposit' | 'BadStatus' | 'PreimageNotExist' | 'PreimageStoredWithDifferentLength';
  }

  /** @name PalletRemarkError (900) */
  interface PalletRemarkError extends Enum {
    readonly isEmpty: boolean;
    readonly isBadContext: boolean;
    readonly type: 'Empty' | 'BadContext';
  }

  /** @name PalletConvictionVotingVoteVoting (902) */
  interface PalletConvictionVotingVoteVoting extends Enum {
    readonly isCasting: boolean;
    readonly asCasting: PalletConvictionVotingVoteCasting;
    readonly isDelegating: boolean;
    readonly asDelegating: PalletConvictionVotingVoteDelegating;
    readonly type: 'Casting' | 'Delegating';
  }

  /** @name PalletConvictionVotingVoteCasting (903) */
  interface PalletConvictionVotingVoteCasting extends Struct {
    readonly votes: Vec<ITuple<[u32, PalletConvictionVotingVoteAccountVote]>>;
    readonly delegations: PalletConvictionVotingDelegations;
    readonly prior: PalletConvictionVotingVotePriorLock;
  }

  /** @name PalletConvictionVotingDelegations (907) */
  interface PalletConvictionVotingDelegations extends Struct {
    readonly votes: u128;
    readonly capital: u128;
  }

  /** @name PalletConvictionVotingVotePriorLock (908) */
  interface PalletConvictionVotingVotePriorLock extends ITuple<[u32, u128]> {}

  /** @name PalletConvictionVotingVoteDelegating (909) */
  interface PalletConvictionVotingVoteDelegating extends Struct {
    readonly balance: u128;
    readonly target: AccountId32;
    readonly conviction: PalletConvictionVotingConviction;
    readonly delegations: PalletConvictionVotingDelegations;
    readonly prior: PalletConvictionVotingVotePriorLock;
  }

  /** @name PalletConvictionVotingError (913) */
  interface PalletConvictionVotingError extends Enum {
    readonly isNotOngoing: boolean;
    readonly isNotVoter: boolean;
    readonly isNoPermission: boolean;
    readonly isNoPermissionYet: boolean;
    readonly isAlreadyDelegating: boolean;
    readonly isAlreadyVoting: boolean;
    readonly isInsufficientFunds: boolean;
    readonly isNotDelegating: boolean;
    readonly isNonsense: boolean;
    readonly isMaxVotesReached: boolean;
    readonly isClassNeeded: boolean;
    readonly isBadClass: boolean;
    readonly type: 'NotOngoing' | 'NotVoter' | 'NoPermission' | 'NoPermissionYet' | 'AlreadyDelegating' | 'AlreadyVoting' | 'InsufficientFunds' | 'NotDelegating' | 'Nonsense' | 'MaxVotesReached' | 'ClassNeeded' | 'BadClass';
  }

  /** @name PalletWhitelistError (914) */
  interface PalletWhitelistError extends Enum {
    readonly isUnavailablePreImage: boolean;
    readonly isUndecodableCall: boolean;
    readonly isInvalidCallWeightWitness: boolean;
    readonly isCallIsNotWhitelisted: boolean;
    readonly isCallAlreadyWhitelisted: boolean;
    readonly type: 'UnavailablePreImage' | 'UndecodableCall' | 'InvalidCallWeightWitness' | 'CallIsNotWhitelisted' | 'CallAlreadyWhitelisted';
  }

  /** @name PalletAllianceMemberRole (919) */
  interface PalletAllianceMemberRole extends Enum {
    readonly isFellow: boolean;
    readonly isAlly: boolean;
    readonly isRetiring: boolean;
    readonly type: 'Fellow' | 'Ally' | 'Retiring';
  }

  /** @name PalletAllianceError (923) */
  interface PalletAllianceError extends Enum {
    readonly isAllianceNotYetInitialized: boolean;
    readonly isAllianceAlreadyInitialized: boolean;
    readonly isAlreadyMember: boolean;
    readonly isNotMember: boolean;
    readonly isNotAlly: boolean;
    readonly isNoVotingRights: boolean;
    readonly isAlreadyElevated: boolean;
    readonly isAlreadyUnscrupulous: boolean;
    readonly isAccountNonGrata: boolean;
    readonly isNotListedAsUnscrupulous: boolean;
    readonly isTooManyUnscrupulousItems: boolean;
    readonly isTooLongWebsiteUrl: boolean;
    readonly isInsufficientFunds: boolean;
    readonly isWithoutRequiredIdentityFields: boolean;
    readonly isWithoutGoodIdentityJudgement: boolean;
    readonly isMissingProposalHash: boolean;
    readonly isMissingAnnouncement: boolean;
    readonly isTooManyMembers: boolean;
    readonly isTooManyAnnouncements: boolean;
    readonly isBadWitness: boolean;
    readonly isAlreadyRetiring: boolean;
    readonly isRetirementNoticeNotGiven: boolean;
    readonly isRetirementPeriodNotPassed: boolean;
    readonly isFellowsMissing: boolean;
    readonly type: 'AllianceNotYetInitialized' | 'AllianceAlreadyInitialized' | 'AlreadyMember' | 'NotMember' | 'NotAlly' | 'NoVotingRights' | 'AlreadyElevated' | 'AlreadyUnscrupulous' | 'AccountNonGrata' | 'NotListedAsUnscrupulous' | 'TooManyUnscrupulousItems' | 'TooLongWebsiteUrl' | 'InsufficientFunds' | 'WithoutRequiredIdentityFields' | 'WithoutGoodIdentityJudgement' | 'MissingProposalHash' | 'MissingAnnouncement' | 'TooManyMembers' | 'TooManyAnnouncements' | 'BadWitness' | 'AlreadyRetiring' | 'RetirementNoticeNotGiven' | 'RetirementPeriodNotPassed' | 'FellowsMissing';
  }

  /** @name PalletNominationPoolsPoolMember (924) */
  interface PalletNominationPoolsPoolMember extends Struct {
    readonly poolId: u32;
    readonly points: u128;
    readonly lastRecordedRewardCounter: u128;
    readonly unbondingEras: BTreeMap<u32, u128>;
  }

  /** @name PalletNominationPoolsBondedPoolInner (927) */
  interface PalletNominationPoolsBondedPoolInner extends Struct {
    readonly commission: PalletNominationPoolsCommission;
    readonly memberCounter: u32;
    readonly points: u128;
    readonly roles: PalletNominationPoolsPoolRoles;
    readonly state: PalletNominationPoolsPoolState;
  }

  /** @name PalletNominationPoolsCommission (928) */
  interface PalletNominationPoolsCommission extends Struct {
    readonly current: Option<ITuple<[Perbill, AccountId32]>>;
    readonly max: Option<Perbill>;
    readonly changeRate: Option<PalletNominationPoolsCommissionChangeRate>;
    readonly throttleFrom: Option<u32>;
    readonly claimPermission: Option<PalletNominationPoolsCommissionClaimPermission>;
  }

  /** @name PalletNominationPoolsPoolRoles (930) */
  interface PalletNominationPoolsPoolRoles extends Struct {
    readonly depositor: AccountId32;
    readonly root: Option<AccountId32>;
    readonly nominator: Option<AccountId32>;
    readonly bouncer: Option<AccountId32>;
  }

  /** @name PalletNominationPoolsRewardPool (931) */
  interface PalletNominationPoolsRewardPool extends Struct {
    readonly lastRecordedRewardCounter: u128;
    readonly lastRecordedTotalPayouts: u128;
    readonly totalRewardsClaimed: u128;
    readonly totalCommissionPending: u128;
    readonly totalCommissionClaimed: u128;
  }

  /** @name PalletNominationPoolsSubPools (932) */
  interface PalletNominationPoolsSubPools extends Struct {
    readonly noEra: PalletNominationPoolsUnbondPool;
    readonly withEra: BTreeMap<u32, PalletNominationPoolsUnbondPool>;
  }

  /** @name PalletNominationPoolsUnbondPool (933) */
  interface PalletNominationPoolsUnbondPool extends Struct {
    readonly points: u128;
    readonly balance: u128;
  }

  /** @name PalletNominationPoolsError (938) */
  interface PalletNominationPoolsError extends Enum {
    readonly isPoolNotFound: boolean;
    readonly isPoolMemberNotFound: boolean;
    readonly isRewardPoolNotFound: boolean;
    readonly isSubPoolsNotFound: boolean;
    readonly isAccountBelongsToOtherPool: boolean;
    readonly isFullyUnbonding: boolean;
    readonly isMaxUnbondingLimit: boolean;
    readonly isCannotWithdrawAny: boolean;
    readonly isMinimumBondNotMet: boolean;
    readonly isOverflowRisk: boolean;
    readonly isNotDestroying: boolean;
    readonly isNotNominator: boolean;
    readonly isNotKickerOrDestroying: boolean;
    readonly isNotOpen: boolean;
    readonly isMaxPools: boolean;
    readonly isMaxPoolMembers: boolean;
    readonly isCanNotChangeState: boolean;
    readonly isDoesNotHavePermission: boolean;
    readonly isMetadataExceedsMaxLen: boolean;
    readonly isDefensive: boolean;
    readonly asDefensive: PalletNominationPoolsDefensiveError;
    readonly isPartialUnbondNotAllowedPermissionlessly: boolean;
    readonly isMaxCommissionRestricted: boolean;
    readonly isCommissionExceedsMaximum: boolean;
    readonly isCommissionExceedsGlobalMaximum: boolean;
    readonly isCommissionChangeThrottled: boolean;
    readonly isCommissionChangeRateNotAllowed: boolean;
    readonly isNoPendingCommission: boolean;
    readonly isNoCommissionCurrentSet: boolean;
    readonly isPoolIdInUse: boolean;
    readonly isInvalidPoolId: boolean;
    readonly isBondExtraRestricted: boolean;
    readonly isNothingToAdjust: boolean;
    readonly isNothingToSlash: boolean;
    readonly isSlashTooLow: boolean;
    readonly isAlreadyMigrated: boolean;
    readonly isNotMigrated: boolean;
    readonly isNotSupported: boolean;
    readonly isRestricted: boolean;
    readonly type: 'PoolNotFound' | 'PoolMemberNotFound' | 'RewardPoolNotFound' | 'SubPoolsNotFound' | 'AccountBelongsToOtherPool' | 'FullyUnbonding' | 'MaxUnbondingLimit' | 'CannotWithdrawAny' | 'MinimumBondNotMet' | 'OverflowRisk' | 'NotDestroying' | 'NotNominator' | 'NotKickerOrDestroying' | 'NotOpen' | 'MaxPools' | 'MaxPoolMembers' | 'CanNotChangeState' | 'DoesNotHavePermission' | 'MetadataExceedsMaxLen' | 'Defensive' | 'PartialUnbondNotAllowedPermissionlessly' | 'MaxCommissionRestricted' | 'CommissionExceedsMaximum' | 'CommissionExceedsGlobalMaximum' | 'CommissionChangeThrottled' | 'CommissionChangeRateNotAllowed' | 'NoPendingCommission' | 'NoCommissionCurrentSet' | 'PoolIdInUse' | 'InvalidPoolId' | 'BondExtraRestricted' | 'NothingToAdjust' | 'NothingToSlash' | 'SlashTooLow' | 'AlreadyMigrated' | 'NotMigrated' | 'NotSupported' | 'Restricted';
  }

  /** @name PalletNominationPoolsDefensiveError (939) */
  interface PalletNominationPoolsDefensiveError extends Enum {
    readonly isNotEnoughSpaceInUnbondPool: boolean;
    readonly isPoolNotFound: boolean;
    readonly isRewardPoolNotFound: boolean;
    readonly isSubPoolsNotFound: boolean;
    readonly isBondedStashKilledPrematurely: boolean;
    readonly isDelegationUnsupported: boolean;
    readonly isSlashNotApplied: boolean;
    readonly type: 'NotEnoughSpaceInUnbondPool' | 'PoolNotFound' | 'RewardPoolNotFound' | 'SubPoolsNotFound' | 'BondedStashKilledPrematurely' | 'DelegationUnsupported' | 'SlashNotApplied';
  }

  /** @name PalletReferendaReferendumInfoRankedCollectiveTally (940) */
  interface PalletReferendaReferendumInfoRankedCollectiveTally extends Enum {
    readonly isOngoing: boolean;
    readonly asOngoing: PalletReferendaReferendumStatusRankedCollectiveTally;
    readonly isApproved: boolean;
    readonly asApproved: ITuple<[u32, Option<PalletReferendaDeposit>, Option<PalletReferendaDeposit>]>;
    readonly isRejected: boolean;
    readonly asRejected: ITuple<[u32, Option<PalletReferendaDeposit>, Option<PalletReferendaDeposit>]>;
    readonly isCancelled: boolean;
    readonly asCancelled: ITuple<[u32, Option<PalletReferendaDeposit>, Option<PalletReferendaDeposit>]>;
    readonly isTimedOut: boolean;
    readonly asTimedOut: ITuple<[u32, Option<PalletReferendaDeposit>, Option<PalletReferendaDeposit>]>;
    readonly isKilled: boolean;
    readonly asKilled: u32;
    readonly type: 'Ongoing' | 'Approved' | 'Rejected' | 'Cancelled' | 'TimedOut' | 'Killed';
  }

  /** @name PalletReferendaReferendumStatusRankedCollectiveTally (941) */
  interface PalletReferendaReferendumStatusRankedCollectiveTally extends Struct {
    readonly track: u16;
    readonly origin: KitchensinkRuntimeOriginCaller;
    readonly proposal: FrameSupportPreimagesBounded;
    readonly enactment: FrameSupportScheduleDispatchTime;
    readonly submitted: u32;
    readonly submissionDeposit: PalletReferendaDeposit;
    readonly decisionDeposit: Option<PalletReferendaDeposit>;
    readonly deciding: Option<PalletReferendaDecidingStatus>;
    readonly tally: PalletRankedCollectiveTally;
    readonly inQueue: bool;
    readonly alarm: Option<ITuple<[u32, ITuple<[u32, u32]>]>>;
  }

  /** @name PalletRankedCollectiveMemberRecord (944) */
  interface PalletRankedCollectiveMemberRecord extends Struct {
    readonly rank: u16;
  }

  /** @name PalletRankedCollectiveError (948) */
  interface PalletRankedCollectiveError extends Enum {
    readonly isAlreadyMember: boolean;
    readonly isNotMember: boolean;
    readonly isNotPolling: boolean;
    readonly isOngoing: boolean;
    readonly isNoneRemaining: boolean;
    readonly isCorruption: boolean;
    readonly isRankTooLow: boolean;
    readonly isInvalidWitness: boolean;
    readonly isNoPermission: boolean;
    readonly isSameMember: boolean;
    readonly isTooManyMembers: boolean;
    readonly type: 'AlreadyMember' | 'NotMember' | 'NotPolling' | 'Ongoing' | 'NoneRemaining' | 'Corruption' | 'RankTooLow' | 'InvalidWitness' | 'NoPermission' | 'SameMember' | 'TooManyMembers';
  }

  /** @name PalletAssetConversionPoolInfo (949) */
  interface PalletAssetConversionPoolInfo extends Struct {
    readonly lpToken: u32;
  }

  /** @name PalletAssetConversionError (950) */
  interface PalletAssetConversionError extends Enum {
    readonly isInvalidAssetPair: boolean;
    readonly isPoolExists: boolean;
    readonly isWrongDesiredAmount: boolean;
    readonly isAmountOneLessThanMinimal: boolean;
    readonly isAmountTwoLessThanMinimal: boolean;
    readonly isReserveLeftLessThanMinimal: boolean;
    readonly isAmountOutTooHigh: boolean;
    readonly isPoolNotFound: boolean;
    readonly isOverflow: boolean;
    readonly isAssetOneDepositDidNotMeetMinimum: boolean;
    readonly isAssetTwoDepositDidNotMeetMinimum: boolean;
    readonly isAssetOneWithdrawalDidNotMeetMinimum: boolean;
    readonly isAssetTwoWithdrawalDidNotMeetMinimum: boolean;
    readonly isOptimalAmountLessThanDesired: boolean;
    readonly isInsufficientLiquidityMinted: boolean;
    readonly isZeroLiquidity: boolean;
    readonly isZeroAmount: boolean;
    readonly isProvidedMinimumNotSufficientForSwap: boolean;
    readonly isProvidedMaximumNotSufficientForSwap: boolean;
    readonly isInvalidPath: boolean;
    readonly isNonUniquePath: boolean;
    readonly isIncorrectPoolAssetId: boolean;
    readonly isBelowMinimum: boolean;
    readonly type: 'InvalidAssetPair' | 'PoolExists' | 'WrongDesiredAmount' | 'AmountOneLessThanMinimal' | 'AmountTwoLessThanMinimal' | 'ReserveLeftLessThanMinimal' | 'AmountOutTooHigh' | 'PoolNotFound' | 'Overflow' | 'AssetOneDepositDidNotMeetMinimum' | 'AssetTwoDepositDidNotMeetMinimum' | 'AssetOneWithdrawalDidNotMeetMinimum' | 'AssetTwoWithdrawalDidNotMeetMinimum' | 'OptimalAmountLessThanDesired' | 'InsufficientLiquidityMinted' | 'ZeroLiquidity' | 'ZeroAmount' | 'ProvidedMinimumNotSufficientForSwap' | 'ProvidedMaximumNotSufficientForSwap' | 'InvalidPath' | 'NonUniquePath' | 'IncorrectPoolAssetId' | 'BelowMinimum';
  }

  /** @name PalletFastUnstakeUnstakeRequest (951) */
  interface PalletFastUnstakeUnstakeRequest extends Struct {
    readonly stashes: Vec<ITuple<[AccountId32, u128]>>;
    readonly checked: Vec<u32>;
  }

  /** @name PalletFastUnstakeError (954) */
  interface PalletFastUnstakeError extends Enum {
    readonly isNotController: boolean;
    readonly isAlreadyQueued: boolean;
    readonly isNotFullyBonded: boolean;
    readonly isNotQueued: boolean;
    readonly isAlreadyHead: boolean;
    readonly isCallNotAllowed: boolean;
    readonly type: 'NotController' | 'AlreadyQueued' | 'NotFullyBonded' | 'NotQueued' | 'AlreadyHead' | 'CallNotAllowed';
  }

  /** @name PalletMessageQueueBookState (955) */
  interface PalletMessageQueueBookState extends Struct {
    readonly begin: u32;
    readonly end: u32;
    readonly count: u32;
    readonly readyNeighbours: Option<PalletMessageQueueNeighbours>;
    readonly messageCount: u64;
    readonly size_: u64;
  }

  /** @name PalletMessageQueueNeighbours (957) */
  interface PalletMessageQueueNeighbours extends Struct {
    readonly prev: u32;
    readonly next: u32;
  }

  /** @name PalletMessageQueuePage (958) */
  interface PalletMessageQueuePage extends Struct {
    readonly remaining: u32;
    readonly remainingSize: u32;
    readonly firstIndex: u32;
    readonly first: u32;
    readonly last: u32;
    readonly heap: Bytes;
  }

  /** @name PalletMessageQueueError (960) */
  interface PalletMessageQueueError extends Enum {
    readonly isNotReapable: boolean;
    readonly isNoPage: boolean;
    readonly isNoMessage: boolean;
    readonly isAlreadyProcessed: boolean;
    readonly isQueued: boolean;
    readonly isInsufficientWeight: boolean;
    readonly isTemporarilyUnprocessable: boolean;
    readonly isQueuePaused: boolean;
    readonly isRecursiveDisallowed: boolean;
    readonly type: 'NotReapable' | 'NoPage' | 'NoMessage' | 'AlreadyProcessed' | 'Queued' | 'InsufficientWeight' | 'TemporarilyUnprocessable' | 'QueuePaused' | 'RecursiveDisallowed';
  }

  /** @name PalletTxPauseError (961) */
  interface PalletTxPauseError extends Enum {
    readonly isIsPaused: boolean;
    readonly isIsUnpaused: boolean;
    readonly isUnpausable: boolean;
    readonly isNotFound: boolean;
    readonly type: 'IsPaused' | 'IsUnpaused' | 'Unpausable' | 'NotFound';
  }

  /** @name PalletSafeModeError (962) */
  interface PalletSafeModeError extends Enum {
    readonly isEntered: boolean;
    readonly isExited: boolean;
    readonly isNotConfigured: boolean;
    readonly isNoDeposit: boolean;
    readonly isAlreadyDeposited: boolean;
    readonly isCannotReleaseYet: boolean;
    readonly isCurrencyError: boolean;
    readonly type: 'Entered' | 'Exited' | 'NotConfigured' | 'NoDeposit' | 'AlreadyDeposited' | 'CannotReleaseYet' | 'CurrencyError';
  }

  /** @name PalletMigrationsError (963) */
  interface PalletMigrationsError extends Enum {
    readonly isOngoing: boolean;
    readonly type: 'Ongoing';
  }

  /** @name PalletBrokerLeaseRecordItem (967) */
  interface PalletBrokerLeaseRecordItem extends Struct {
    readonly until: u32;
    readonly task: u32;
  }

  /** @name PalletBrokerStatusRecord (969) */
  interface PalletBrokerStatusRecord extends Struct {
    readonly coreCount: u16;
    readonly privatePoolSize: u32;
    readonly systemPoolSize: u32;
    readonly lastCommittedTimeslice: u32;
    readonly lastTimeslice: u32;
  }

  /** @name PalletBrokerSaleInfoRecord (970) */
  interface PalletBrokerSaleInfoRecord extends Struct {
    readonly saleStart: u32;
    readonly leadinLength: u32;
    readonly endPrice: u128;
    readonly regionBegin: u32;
    readonly regionEnd: u32;
    readonly idealCoresSold: u16;
    readonly coresOffered: u16;
    readonly firstCore: u16;
    readonly selloutPrice: Option<u128>;
    readonly coresSold: u16;
  }

  /** @name PalletBrokerPotentialRenewalId (971) */
  interface PalletBrokerPotentialRenewalId extends Struct {
    readonly core: u16;
    readonly when: u32;
  }

  /** @name PalletBrokerPotentialRenewalRecord (972) */
  interface PalletBrokerPotentialRenewalRecord extends Struct {
    readonly price: u128;
    readonly completion: PalletBrokerCompletionStatus;
  }

  /** @name PalletBrokerCompletionStatus (973) */
  interface PalletBrokerCompletionStatus extends Enum {
    readonly isPartial: boolean;
    readonly asPartial: PalletBrokerCoreMask;
    readonly isComplete: boolean;
    readonly asComplete: Vec<PalletBrokerScheduleItem>;
    readonly type: 'Partial' | 'Complete';
  }

  /** @name PalletBrokerRegionRecord (974) */
  interface PalletBrokerRegionRecord extends Struct {
    readonly end: u32;
    readonly owner: Option<AccountId32>;
    readonly paid: Option<u128>;
  }

  /** @name PalletBrokerContributionRecord (976) */
  interface PalletBrokerContributionRecord extends Struct {
    readonly length: u32;
    readonly payee: AccountId32;
  }

  /** @name PalletBrokerPoolIoRecord (977) */
  interface PalletBrokerPoolIoRecord extends Struct {
    readonly private: i32;
    readonly system: i32;
  }

  /** @name PalletBrokerInstaPoolHistoryRecord (979) */
  interface PalletBrokerInstaPoolHistoryRecord extends Struct {
    readonly privateContributions: u32;
    readonly systemContributions: u32;
    readonly maybePayout: Option<u128>;
  }

  /** @name PalletBrokerAutoRenewalRecord (981) */
  interface PalletBrokerAutoRenewalRecord extends Struct {
    readonly core: u16;
    readonly task: u32;
    readonly nextRenewal: u32;
  }

  /** @name PalletBrokerError (983) */
  interface PalletBrokerError extends Enum {
    readonly isUnknownRegion: boolean;
    readonly isNotOwner: boolean;
    readonly isPivotTooLate: boolean;
    readonly isPivotTooEarly: boolean;
    readonly isExteriorPivot: boolean;
    readonly isVoidPivot: boolean;
    readonly isCompletePivot: boolean;
    readonly isCorruptWorkplan: boolean;
    readonly isNoSales: boolean;
    readonly isOverpriced: boolean;
    readonly isUnavailable: boolean;
    readonly isSoldOut: boolean;
    readonly isWrongTime: boolean;
    readonly isNotAllowed: boolean;
    readonly isUninitialized: boolean;
    readonly isTooEarly: boolean;
    readonly isNothingToDo: boolean;
    readonly isTooManyReservations: boolean;
    readonly isTooManyLeases: boolean;
    readonly isLeaseNotFound: boolean;
    readonly isUnknownRevenue: boolean;
    readonly isUnknownContribution: boolean;
    readonly isIncompleteAssignment: boolean;
    readonly isStillValid: boolean;
    readonly isNoHistory: boolean;
    readonly isUnknownReservation: boolean;
    readonly isUnknownRenewal: boolean;
    readonly isAlreadyExpired: boolean;
    readonly isInvalidConfig: boolean;
    readonly isNoClaimTimeslices: boolean;
    readonly isNoPermission: boolean;
    readonly isTooManyAutoRenewals: boolean;
    readonly isNonTaskAutoRenewal: boolean;
    readonly isSovereignAccountNotFound: boolean;
    readonly isAutoRenewalNotEnabled: boolean;
    readonly isAssignmentNotFound: boolean;
    readonly isCreditPurchaseTooSmall: boolean;
    readonly type: 'UnknownRegion' | 'NotOwner' | 'PivotTooLate' | 'PivotTooEarly' | 'ExteriorPivot' | 'VoidPivot' | 'CompletePivot' | 'CorruptWorkplan' | 'NoSales' | 'Overpriced' | 'Unavailable' | 'SoldOut' | 'WrongTime' | 'NotAllowed' | 'Uninitialized' | 'TooEarly' | 'NothingToDo' | 'TooManyReservations' | 'TooManyLeases' | 'LeaseNotFound' | 'UnknownRevenue' | 'UnknownContribution' | 'IncompleteAssignment' | 'StillValid' | 'NoHistory' | 'UnknownReservation' | 'UnknownRenewal' | 'AlreadyExpired' | 'InvalidConfig' | 'NoClaimTimeslices' | 'NoPermission' | 'TooManyAutoRenewals' | 'NonTaskAutoRenewal' | 'SovereignAccountNotFound' | 'AutoRenewalNotEnabled' | 'AssignmentNotFound' | 'CreditPurchaseTooSmall';
  }

  /** @name PalletExampleTasksError (984) */
  interface PalletExampleTasksError extends Enum {
    readonly isNotFound: boolean;
    readonly type: 'NotFound';
  }

  /** @name PalletAssetConversionOpsError (985) */
  interface PalletAssetConversionOpsError extends Enum {
    readonly isInvalidAssetPair: boolean;
    readonly isPoolNotFound: boolean;
    readonly isZeroBalance: boolean;
    readonly isPartialTransfer: boolean;
    readonly type: 'InvalidAssetPair' | 'PoolNotFound' | 'ZeroBalance' | 'PartialTransfer';
  }

  /** @name PalletReviveWasmCodeInfo (987) */
  interface PalletReviveWasmCodeInfo extends Struct {
    readonly owner: AccountId32;
    readonly deposit: Compact<u128>;
    readonly refcount: Compact<u64>;
    readonly codeLen: u32;
    readonly behaviourVersion: u32;
  }

  /** @name PalletReviveStorageContractInfo (988) */
  interface PalletReviveStorageContractInfo extends Struct {
    readonly trieId: Bytes;
    readonly codeHash: H256;
    readonly storageBytes: u32;
    readonly storageItems: u32;
    readonly storageByteDeposit: u128;
    readonly storageItemDeposit: u128;
    readonly storageBaseDeposit: u128;
    readonly immutableDataLen: u32;
  }

  /** @name PalletReviveStorageDeletionQueueManager (990) */
  interface PalletReviveStorageDeletionQueueManager extends Struct {
    readonly insertCounter: u32;
    readonly deleteCounter: u32;
  }

  /** @name PalletReviveError (991) */
  interface PalletReviveError extends Enum {
    readonly isInvalidSchedule: boolean;
    readonly isInvalidCallFlags: boolean;
    readonly isOutOfGas: boolean;
    readonly isTransferFailed: boolean;
    readonly isMaxCallDepthReached: boolean;
    readonly isContractNotFound: boolean;
    readonly isCodeNotFound: boolean;
    readonly isCodeInfoNotFound: boolean;
    readonly isOutOfBounds: boolean;
    readonly isDecodingFailed: boolean;
    readonly isContractTrapped: boolean;
    readonly isValueTooLarge: boolean;
    readonly isTerminatedWhileReentrant: boolean;
    readonly isInputForwarded: boolean;
    readonly isTooManyTopics: boolean;
    readonly isNoChainExtension: boolean;
    readonly isXcmDecodeFailed: boolean;
    readonly isDuplicateContract: boolean;
    readonly isTerminatedInConstructor: boolean;
    readonly isReentranceDenied: boolean;
    readonly isReenteredPallet: boolean;
    readonly isStateChangeDenied: boolean;
    readonly isStorageDepositNotEnoughFunds: boolean;
    readonly isStorageDepositLimitExhausted: boolean;
    readonly isCodeInUse: boolean;
    readonly isContractReverted: boolean;
    readonly isCodeRejected: boolean;
    readonly isBlobTooLarge: boolean;
    readonly isStaticMemoryTooLarge: boolean;
    readonly isBasicBlockTooLarge: boolean;
    readonly isInvalidInstruction: boolean;
    readonly isMaxDelegateDependenciesReached: boolean;
    readonly isDelegateDependencyNotFound: boolean;
    readonly isDelegateDependencyAlreadyExists: boolean;
    readonly isCannotAddSelfAsDelegateDependency: boolean;
    readonly isOutOfTransientStorage: boolean;
    readonly isInvalidSyscall: boolean;
    readonly isInvalidStorageFlags: boolean;
    readonly isExecutionFailed: boolean;
    readonly isBalanceConversionFailed: boolean;
    readonly isDecimalPrecisionLoss: boolean;
    readonly isInvalidImmutableAccess: boolean;
    readonly isAccountUnmapped: boolean;
    readonly isAccountAlreadyMapped: boolean;
    readonly isInvalidGenericTransaction: boolean;
    readonly isRefcountOverOrUnderflow: boolean;
    readonly isUnsupportedPrecompileAddress: boolean;
    readonly isPrecompileFailure: boolean;
    readonly type: 'InvalidSchedule' | 'InvalidCallFlags' | 'OutOfGas' | 'TransferFailed' | 'MaxCallDepthReached' | 'ContractNotFound' | 'CodeNotFound' | 'CodeInfoNotFound' | 'OutOfBounds' | 'DecodingFailed' | 'ContractTrapped' | 'ValueTooLarge' | 'TerminatedWhileReentrant' | 'InputForwarded' | 'TooManyTopics' | 'NoChainExtension' | 'XcmDecodeFailed' | 'DuplicateContract' | 'TerminatedInConstructor' | 'ReentranceDenied' | 'ReenteredPallet' | 'StateChangeDenied' | 'StorageDepositNotEnoughFunds' | 'StorageDepositLimitExhausted' | 'CodeInUse' | 'ContractReverted' | 'CodeRejected' | 'BlobTooLarge' | 'StaticMemoryTooLarge' | 'BasicBlockTooLarge' | 'InvalidInstruction' | 'MaxDelegateDependenciesReached' | 'DelegateDependencyNotFound' | 'DelegateDependencyAlreadyExists' | 'CannotAddSelfAsDelegateDependency' | 'OutOfTransientStorage' | 'InvalidSyscall' | 'InvalidStorageFlags' | 'ExecutionFailed' | 'BalanceConversionFailed' | 'DecimalPrecisionLoss' | 'InvalidImmutableAccess' | 'AccountUnmapped' | 'AccountAlreadyMapped' | 'InvalidGenericTransaction' | 'RefcountOverOrUnderflow' | 'UnsupportedPrecompileAddress' | 'PrecompileFailure';
  }

  /** @name PalletDelegatedStakingDelegation (992) */
  interface PalletDelegatedStakingDelegation extends Struct {
    readonly agent: AccountId32;
    readonly amount: u128;
  }

  /** @name PalletDelegatedStakingAgentLedger (993) */
  interface PalletDelegatedStakingAgentLedger extends Struct {
    readonly payee: AccountId32;
    readonly totalDelegated: Compact<u128>;
    readonly unclaimedWithdrawals: Compact<u128>;
    readonly pendingSlash: Compact<u128>;
  }

  /** @name PalletDelegatedStakingError (994) */
  interface PalletDelegatedStakingError extends Enum {
    readonly isNotAllowed: boolean;
    readonly isAlreadyStaking: boolean;
    readonly isInvalidRewardDestination: boolean;
    readonly isInvalidDelegation: boolean;
    readonly isNotEnoughFunds: boolean;
    readonly isNotAgent: boolean;
    readonly isNotDelegator: boolean;
    readonly isBadState: boolean;
    readonly isUnappliedSlash: boolean;
    readonly isNothingToSlash: boolean;
    readonly isWithdrawFailed: boolean;
    readonly isNotSupported: boolean;
    readonly type: 'NotAllowed' | 'AlreadyStaking' | 'InvalidRewardDestination' | 'InvalidDelegation' | 'NotEnoughFunds' | 'NotAgent' | 'NotDelegator' | 'BadState' | 'UnappliedSlash' | 'NothingToSlash' | 'WithdrawFailed' | 'NotSupported';
  }

  /** @name PalletAssetRewardsPoolStakerInfo (995) */
  interface PalletAssetRewardsPoolStakerInfo extends Struct {
    readonly amount: u128;
    readonly rewards: u128;
    readonly rewardPerTokenPaid: u128;
  }

  /** @name PalletAssetRewardsPoolInfo (996) */
  interface PalletAssetRewardsPoolInfo extends Struct {
    readonly stakedAssetId: FrameSupportTokensFungibleUnionOfNativeOrWithId;
    readonly rewardAssetId: FrameSupportTokensFungibleUnionOfNativeOrWithId;
    readonly rewardRatePerBlock: u128;
    readonly expiryBlock: u32;
    readonly admin: AccountId32;
    readonly totalTokensStaked: u128;
    readonly rewardPerTokenStored: u128;
    readonly lastUpdateBlock: u32;
    readonly account: AccountId32;
  }

  /** @name PalletAssetRewardsError (999) */
  interface PalletAssetRewardsError extends Enum {
    readonly isNotEnoughTokens: boolean;
    readonly isNonExistentPool: boolean;
    readonly isNonExistentStaker: boolean;
    readonly isNonExistentAsset: boolean;
    readonly isBlockNumberConversionError: boolean;
    readonly isExpiryBlockMustBeInTheFuture: boolean;
    readonly isInsufficientFunds: boolean;
    readonly isExpiryCut: boolean;
    readonly isRewardRateCut: boolean;
    readonly isNonEmptyPool: boolean;
    readonly type: 'NotEnoughTokens' | 'NonExistentPool' | 'NonExistentStaker' | 'NonExistentAsset' | 'BlockNumberConversionError' | 'ExpiryBlockMustBeInTheFuture' | 'InsufficientFunds' | 'ExpiryCut' | 'RewardRateCut' | 'NonEmptyPool';
  }

  /** @name PalletAssetsFreezerError (1000) */
  interface PalletAssetsFreezerError extends Enum {
    readonly isTooManyFreezes: boolean;
    readonly type: 'TooManyFreezes';
  }

  /** @name PalletMetaTxError (1001) */
  interface PalletMetaTxError extends Enum {
    readonly isBadProof: boolean;
    readonly isFuture: boolean;
    readonly isStale: boolean;
    readonly isAncientBirthBlock: boolean;
    readonly isUnknownOrigin: boolean;
    readonly isInvalid: boolean;
    readonly type: 'BadProof' | 'Future' | 'Stale' | 'AncientBirthBlock' | 'UnknownOrigin' | 'Invalid';
  }

  /** @name FrameSystemExtensionsCheckWeight (1003) */
  type FrameSystemExtensionsCheckWeight = Null;

  /** @name PalletAssetConversionTxPaymentChargeAssetTxPayment (1004) */
  interface PalletAssetConversionTxPaymentChargeAssetTxPayment extends Struct {
    readonly tip: Compact<u128>;
    readonly assetId: Option<FrameSupportTokensFungibleUnionOfNativeOrWithId>;
  }

  /** @name FrameSystemExtensionsWeightReclaim (1006) */
  type FrameSystemExtensionsWeightReclaim = Null;

  /** @name SpRuntimeBlock (1007) */
  interface SpRuntimeBlock extends Struct {
    readonly header: SpRuntimeHeader;
    readonly extrinsics: Vec<Bytes>;
  }

  /** @name SpRuntimeExtrinsicInclusionMode (1010) */
  interface SpRuntimeExtrinsicInclusionMode extends Enum {
    readonly isAllExtrinsics: boolean;
    readonly isOnlyInherents: boolean;
    readonly type: 'AllExtrinsics' | 'OnlyInherents';
  }

  /** @name FrameSupportViewFunctionsViewFunctionId (1013) */
  interface FrameSupportViewFunctionsViewFunctionId extends Struct {
    readonly prefix: U8aFixed;
    readonly suffix: U8aFixed;
  }

  /** @name FrameSupportViewFunctionsViewFunctionDispatchError (1015) */
  interface FrameSupportViewFunctionsViewFunctionDispatchError extends Enum {
    readonly isNotImplemented: boolean;
    readonly isNotFound: boolean;
    readonly asNotFound: FrameSupportViewFunctionsViewFunctionId;
    readonly isCodec: boolean;
    readonly type: 'NotImplemented' | 'NotFound' | 'Codec';
  }

  /** @name SpRuntimeTransactionValidityTransactionValidityError (1017) */
  interface SpRuntimeTransactionValidityTransactionValidityError extends Enum {
    readonly isInvalid: boolean;
    readonly asInvalid: SpRuntimeTransactionValidityInvalidTransaction;
    readonly isUnknown: boolean;
    readonly asUnknown: SpRuntimeTransactionValidityUnknownTransaction;
    readonly type: 'Invalid' | 'Unknown';
  }

  /** @name SpRuntimeTransactionValidityInvalidTransaction (1018) */
  interface SpRuntimeTransactionValidityInvalidTransaction extends Enum {
    readonly isCall: boolean;
    readonly isPayment: boolean;
    readonly isFuture: boolean;
    readonly isStale: boolean;
    readonly isBadProof: boolean;
    readonly isAncientBirthBlock: boolean;
    readonly isExhaustsResources: boolean;
    readonly isCustom: boolean;
    readonly asCustom: u8;
    readonly isBadMandatory: boolean;
    readonly isMandatoryValidation: boolean;
    readonly isBadSigner: boolean;
    readonly isIndeterminateImplicit: boolean;
    readonly isUnknownOrigin: boolean;
    readonly type: 'Call' | 'Payment' | 'Future' | 'Stale' | 'BadProof' | 'AncientBirthBlock' | 'ExhaustsResources' | 'Custom' | 'BadMandatory' | 'MandatoryValidation' | 'BadSigner' | 'IndeterminateImplicit' | 'UnknownOrigin';
  }

  /** @name SpRuntimeTransactionValidityUnknownTransaction (1019) */
  interface SpRuntimeTransactionValidityUnknownTransaction extends Enum {
    readonly isCannotLookup: boolean;
    readonly isNoUnsignedValidator: boolean;
    readonly isCustom: boolean;
    readonly asCustom: u8;
    readonly type: 'CannotLookup' | 'NoUnsignedValidator' | 'Custom';
  }

  /** @name SpInherentsInherentData (1020) */
  interface SpInherentsInherentData extends Struct {
    readonly data: BTreeMap<U8aFixed, Bytes>;
  }

  /** @name SpInherentsCheckInherentsResult (1024) */
  interface SpInherentsCheckInherentsResult extends Struct {
    readonly okay: bool;
    readonly fatalError: bool;
    readonly errors: SpInherentsInherentData;
  }

  /** @name SpRuntimeTransactionValidityTransactionSource (1025) */
  interface SpRuntimeTransactionValidityTransactionSource extends Enum {
    readonly isInBlock: boolean;
    readonly isLocal: boolean;
    readonly isExternal: boolean;
    readonly type: 'InBlock' | 'Local' | 'External';
  }

  /** @name SpRuntimeTransactionValidityValidTransaction (1027) */
  interface SpRuntimeTransactionValidityValidTransaction extends Struct {
    readonly priority: u64;
    readonly requires: Vec<Bytes>;
    readonly provides: Vec<Bytes>;
    readonly longevity: u64;
    readonly propagate: bool;
  }

  /** @name SpStatementStoreRuntimeApiStatementSource (1028) */
  interface SpStatementStoreRuntimeApiStatementSource extends Enum {
    readonly isChain: boolean;
    readonly isNetwork: boolean;
    readonly isLocal: boolean;
    readonly type: 'Chain' | 'Network' | 'Local';
  }

  /** @name SpStatementStoreRuntimeApiValidStatement (1030) */
  interface SpStatementStoreRuntimeApiValidStatement extends Struct {
    readonly maxCount: u32;
    readonly maxSize: u32;
  }

  /** @name SpStatementStoreRuntimeApiInvalidStatement (1031) */
  interface SpStatementStoreRuntimeApiInvalidStatement extends Enum {
    readonly isBadProof: boolean;
    readonly isNoProof: boolean;
    readonly isInternalError: boolean;
    readonly type: 'BadProof' | 'NoProof' | 'InternalError';
  }

  /** @name SpConsensusBabeBabeConfiguration (1035) */
  interface SpConsensusBabeBabeConfiguration extends Struct {
    readonly slotDuration: u64;
    readonly epochLength: u64;
    readonly c: ITuple<[u64, u64]>;
    readonly authorities: Vec<ITuple<[SpConsensusBabeAppPublic, u64]>>;
    readonly randomness: U8aFixed;
    readonly allowedSlots: SpConsensusBabeAllowedSlots;
  }

  /** @name SpConsensusBabeEpoch (1036) */
  interface SpConsensusBabeEpoch extends Struct {
    readonly epochIndex: u64;
    readonly startSlot: u64;
    readonly duration: u64;
    readonly authorities: Vec<ITuple<[SpConsensusBabeAppPublic, u64]>>;
    readonly randomness: U8aFixed;
    readonly config: SpConsensusBabeBabeEpochConfiguration;
  }

  /** @name PalletContractsPrimitivesExecReturnValue (1041) */
  interface PalletContractsPrimitivesExecReturnValue extends Struct {
    readonly flags: PalletContractsUapiFlagsReturnFlags;
    readonly data: Bytes;
  }

  /** @name PalletContractsUapiFlagsReturnFlags (1042) */
  interface PalletContractsUapiFlagsReturnFlags extends Struct {
    readonly bits: u32;
  }

  /** @name PalletContractsPrimitivesStorageDeposit (1043) */
  interface PalletContractsPrimitivesStorageDeposit extends Enum {
    readonly isRefund: boolean;
    readonly asRefund: u128;
    readonly isCharge: boolean;
    readonly asCharge: u128;
    readonly type: 'Refund' | 'Charge';
  }

  /** @name PalletContractsPrimitivesCode (1046) */
  interface PalletContractsPrimitivesCode extends Enum {
    readonly isUpload: boolean;
    readonly asUpload: Bytes;
    readonly isExisting: boolean;
    readonly asExisting: H256;
    readonly type: 'Upload' | 'Existing';
  }

  /** @name PalletContractsPrimitivesContractResult (1047) */
  interface PalletContractsPrimitivesContractResult extends Struct {
    readonly gasConsumed: SpWeightsWeightV2Weight;
    readonly gasRequired: SpWeightsWeightV2Weight;
    readonly storageDeposit: PalletContractsPrimitivesStorageDeposit;
    readonly debugMessage: Bytes;
    readonly result: Result<PalletContractsPrimitivesInstantiateReturnValue, SpRuntimeDispatchError>;
    readonly events: Option<Vec<FrameSystemEventRecord>>;
  }

  /** @name PalletContractsPrimitivesInstantiateReturnValue (1049) */
  interface PalletContractsPrimitivesInstantiateReturnValue extends Struct {
    readonly result: PalletContractsPrimitivesExecReturnValue;
    readonly accountId: AccountId32;
  }

  /** @name PalletContractsPrimitivesCodeUploadReturnValue (1051) */
  interface PalletContractsPrimitivesCodeUploadReturnValue extends Struct {
    readonly codeHash: H256;
    readonly deposit: u128;
  }

  /** @name PalletContractsPrimitivesContractAccessError (1053) */
  interface PalletContractsPrimitivesContractAccessError extends Enum {
    readonly isDoesntExist: boolean;
    readonly isKeyDecodingFailed: boolean;
    readonly isMigrationInProgress: boolean;
    readonly type: 'DoesntExist' | 'KeyDecodingFailed' | 'MigrationInProgress';
  }

  /** @name PalletRevivePrimitivesContractResultExecReturnValue (1056) */
  interface PalletRevivePrimitivesContractResultExecReturnValue extends Struct {
    readonly gasConsumed: SpWeightsWeightV2Weight;
    readonly gasRequired: SpWeightsWeightV2Weight;
    readonly storageDeposit: PalletRevivePrimitivesStorageDeposit;
    readonly result: Result<PalletRevivePrimitivesExecReturnValue, SpRuntimeDispatchError>;
  }

  /** @name PalletRevivePrimitivesExecReturnValue (1057) */
  interface PalletRevivePrimitivesExecReturnValue extends Struct {
    readonly flags: PalletReviveUapiFlagsReturnFlags;
    readonly data: Bytes;
  }

  /** @name PalletReviveUapiFlagsReturnFlags (1058) */
  interface PalletReviveUapiFlagsReturnFlags extends Struct {
    readonly bits: u32;
  }

  /** @name PalletRevivePrimitivesStorageDeposit (1059) */
  interface PalletRevivePrimitivesStorageDeposit extends Enum {
    readonly isRefund: boolean;
    readonly asRefund: u128;
    readonly isCharge: boolean;
    readonly asCharge: u128;
    readonly type: 'Refund' | 'Charge';
  }

  /** @name PalletRevivePrimitivesCode (1061) */
  interface PalletRevivePrimitivesCode extends Enum {
    readonly isUpload: boolean;
    readonly asUpload: Bytes;
    readonly isExisting: boolean;
    readonly asExisting: H256;
    readonly type: 'Upload' | 'Existing';
  }

  /** @name PalletRevivePrimitivesContractResultInstantiateReturnValue (1062) */
  interface PalletRevivePrimitivesContractResultInstantiateReturnValue extends Struct {
    readonly gasConsumed: SpWeightsWeightV2Weight;
    readonly gasRequired: SpWeightsWeightV2Weight;
    readonly storageDeposit: PalletRevivePrimitivesStorageDeposit;
    readonly result: Result<PalletRevivePrimitivesInstantiateReturnValue, SpRuntimeDispatchError>;
  }

  /** @name PalletRevivePrimitivesInstantiateReturnValue (1063) */
  interface PalletRevivePrimitivesInstantiateReturnValue extends Struct {
    readonly result: PalletRevivePrimitivesExecReturnValue;
    readonly addr: H160;
  }

  /** @name PalletReviveEvmApiRpcTypesGenGenericTransaction (1065) */
  interface PalletReviveEvmApiRpcTypesGenGenericTransaction extends Struct {
    readonly accessList: Option<Vec<PalletReviveEvmApiRpcTypesGenAccessListEntry>>;
    readonly blobVersionedHashes: Vec<H256>;
    readonly blobs: Vec<Bytes>;
    readonly chainId: Option<U256>;
    readonly from: Option<H160>;
    readonly gas: Option<U256>;
    readonly gasPrice: Option<U256>;
    readonly input: PalletReviveEvmApiRpcTypesGenInputOrData;
    readonly maxFeePerBlobGas: Option<U256>;
    readonly maxFeePerGas: Option<U256>;
    readonly maxPriorityFeePerGas: Option<U256>;
    readonly nonce: Option<U256>;
    readonly to: Option<H160>;
    readonly r_type: Option<u8>;
    readonly value: Option<U256>;
  }

  /** @name PalletReviveEvmApiRpcTypesGenAccessListEntry (1068) */
  interface PalletReviveEvmApiRpcTypesGenAccessListEntry extends Struct {
    readonly address: H160;
    readonly storageKeys: Vec<H256>;
  }

  /** @name PalletReviveEvmApiRpcTypesGenInputOrData (1073) */
  interface PalletReviveEvmApiRpcTypesGenInputOrData extends Struct {
    readonly input: Option<Bytes>;
    readonly data: Option<Bytes>;
  }

  /** @name PalletRevivePrimitivesEthTransactInfo (1078) */
  interface PalletRevivePrimitivesEthTransactInfo extends Struct {
    readonly gasRequired: SpWeightsWeightV2Weight;
    readonly storageDeposit: u128;
    readonly ethGas: U256;
    readonly data: Bytes;
  }

  /** @name PalletRevivePrimitivesEthTransactError (1079) */
  interface PalletRevivePrimitivesEthTransactError extends Enum {
    readonly isData: boolean;
    readonly asData: Bytes;
    readonly isMessage: boolean;
    readonly asMessage: Text;
    readonly type: 'Data' | 'Message';
  }

  /** @name PalletRevivePrimitivesCodeUploadReturnValue (1081) */
  interface PalletRevivePrimitivesCodeUploadReturnValue extends Struct {
    readonly codeHash: H256;
    readonly deposit: u128;
  }

  /** @name PalletRevivePrimitivesContractAccessError (1083) */
  interface PalletRevivePrimitivesContractAccessError extends Enum {
    readonly isDoesntExist: boolean;
    readonly isKeyDecodingFailed: boolean;
    readonly type: 'DoesntExist' | 'KeyDecodingFailed';
  }

  /** @name PalletReviveEvmApiDebugRpcTypesTracerType (1084) */
  interface PalletReviveEvmApiDebugRpcTypesTracerType extends Enum {
    readonly isCallTracer: boolean;
    readonly asCallTracer: Option<PalletReviveEvmApiDebugRpcTypesCallTracerConfig>;
    readonly type: 'CallTracer';
  }

  /** @name PalletReviveEvmApiDebugRpcTypesCallTracerConfig (1086) */
  interface PalletReviveEvmApiDebugRpcTypesCallTracerConfig extends Struct {
    readonly withLogs: bool;
    readonly onlyTopCall: bool;
  }

  /** @name PalletReviveEvmApiDebugRpcTypesTrace (1089) */
  interface PalletReviveEvmApiDebugRpcTypesTrace extends Enum {
    readonly isCall: boolean;
    readonly asCall: PalletReviveEvmApiDebugRpcTypesCallTrace;
    readonly type: 'Call';
  }

  /** @name PalletReviveEvmApiDebugRpcTypesCallTrace (1090) */
  interface PalletReviveEvmApiDebugRpcTypesCallTrace extends Struct {
    readonly from: H160;
    readonly gas: U256;
    readonly gasUsed: U256;
    readonly to: H160;
    readonly input: Bytes;
    readonly output: Bytes;
    readonly error: Option<Text>;
    readonly revertReason: Option<Text>;
    readonly calls: Vec<PalletReviveEvmApiDebugRpcTypesCallTrace>;
    readonly logs: Vec<PalletReviveEvmApiDebugRpcTypesCallLog>;
    readonly value: Option<U256>;
    readonly callType: PalletReviveEvmApiDebugRpcTypesCallType;
  }

  /** @name PalletReviveEvmApiDebugRpcTypesCallLog (1094) */
  interface PalletReviveEvmApiDebugRpcTypesCallLog extends Struct {
    readonly address: H160;
    readonly topics: Vec<H256>;
    readonly data: Bytes;
    readonly position: u32;
  }

  /** @name PalletReviveEvmApiDebugRpcTypesCallType (1095) */
  interface PalletReviveEvmApiDebugRpcTypesCallType extends Enum {
    readonly isCall: boolean;
    readonly isStaticCall: boolean;
    readonly isDelegateCall: boolean;
    readonly type: 'Call' | 'StaticCall' | 'DelegateCall';
  }

  /** @name PalletTransactionPaymentRuntimeDispatchInfo (1098) */
  interface PalletTransactionPaymentRuntimeDispatchInfo extends Struct {
    readonly weight: SpWeightsWeightV2Weight;
    readonly class: FrameSupportDispatchDispatchClass;
    readonly partialFee: u128;
  }

  /** @name PalletTransactionPaymentFeeDetails (1099) */
  interface PalletTransactionPaymentFeeDetails extends Struct {
    readonly inclusionFee: Option<PalletTransactionPaymentInclusionFee>;
    readonly tip: u128;
  }

  /** @name PalletTransactionPaymentInclusionFee (1101) */
  interface PalletTransactionPaymentInclusionFee extends Struct {
    readonly baseFee: u128;
    readonly lenFee: u128;
    readonly adjustedWeightFee: u128;
  }

  /** @name SpConsensusBeefyValidatorSet (1105) */
  interface SpConsensusBeefyValidatorSet extends Struct {
    readonly validators: Vec<SpConsensusBeefyEcdsaCryptoPublic>;
    readonly id: u64;
  }

  /** @name SpConsensusBeefyForkVotingProofOpaqueValue (1106) */
  interface SpConsensusBeefyForkVotingProofOpaqueValue extends Struct {
    readonly vote: SpConsensusBeefyVoteMessage;
    readonly ancestryProof: Bytes;
    readonly header: SpRuntimeHeader;
  }

  /** @name SpMmrPrimitivesError (1108) */
  interface SpMmrPrimitivesError extends Enum {
    readonly isInvalidNumericOp: boolean;
    readonly isPush: boolean;
    readonly isGetRoot: boolean;
    readonly isCommit: boolean;
    readonly isGenerateProof: boolean;
    readonly isVerify: boolean;
    readonly isLeafNotFound: boolean;
    readonly isPalletNotIncluded: boolean;
    readonly isInvalidLeafIndex: boolean;
    readonly isInvalidBestKnownBlock: boolean;
    readonly type: 'InvalidNumericOp' | 'Push' | 'GetRoot' | 'Commit' | 'GenerateProof' | 'Verify' | 'LeafNotFound' | 'PalletNotIncluded' | 'InvalidLeafIndex' | 'InvalidBestKnownBlock';
  }

  /** @name SpMmrPrimitivesLeafProof (1114) */
  interface SpMmrPrimitivesLeafProof extends Struct {
    readonly leafIndices: Vec<u64>;
    readonly leafCount: u64;
    readonly items: Vec<H256>;
  }

  /** @name SpMixnetSessionStatus (1116) */
  interface SpMixnetSessionStatus extends Struct {
    readonly currentIndex: u32;
    readonly phase: SpMixnetSessionPhase;
  }

  /** @name SpMixnetSessionPhase (1117) */
  interface SpMixnetSessionPhase extends Enum {
    readonly isCoverToCurrent: boolean;
    readonly isRequestsToCurrent: boolean;
    readonly isCoverToPrev: boolean;
    readonly isDisconnectFromPrev: boolean;
    readonly type: 'CoverToCurrent' | 'RequestsToCurrent' | 'CoverToPrev' | 'DisconnectFromPrev';
  }

  /** @name SpMixnetMixnode (1120) */
  interface SpMixnetMixnode extends Struct {
    readonly kxPublic: U8aFixed;
    readonly peerId: U8aFixed;
    readonly externalAddresses: Vec<Bytes>;
  }

  /** @name SpMixnetMixnodesErr (1121) */
  interface SpMixnetMixnodesErr extends Enum {
    readonly isInsufficientRegistrations: boolean;
    readonly asInsufficientRegistrations: {
      readonly num: u32;
      readonly min: u32;
    } & Struct;
    readonly type: 'InsufficientRegistrations';
  }

  /** @name KitchensinkRuntimeRuntimeError (1127) */
  interface KitchensinkRuntimeRuntimeError extends Enum {
    readonly isSystem: boolean;
    readonly asSystem: FrameSystemError;
    readonly isUtility: boolean;
    readonly asUtility: PalletUtilityError;
    readonly isBabe: boolean;
    readonly asBabe: PalletBabeError;
    readonly isIndices: boolean;
    readonly asIndices: PalletIndicesError;
    readonly isBalances: boolean;
    readonly asBalances: PalletBalancesError;
    readonly isElectionProviderMultiPhase: boolean;
    readonly asElectionProviderMultiPhase: PalletElectionProviderMultiPhaseError;
    readonly isStaking: boolean;
    readonly asStaking: PalletStakingPalletError;
    readonly isSession: boolean;
    readonly asSession: PalletSessionError;
    readonly isDemocracy: boolean;
    readonly asDemocracy: PalletDemocracyError;
    readonly isCouncil: boolean;
    readonly asCouncil: PalletCollectiveError;
    readonly isTechnicalCommittee: boolean;
    readonly asTechnicalCommittee: PalletCollectiveError;
    readonly isElections: boolean;
    readonly asElections: PalletElectionsPhragmenError;
    readonly isTechnicalMembership: boolean;
    readonly asTechnicalMembership: PalletMembershipError;
    readonly isGrandpa: boolean;
    readonly asGrandpa: PalletGrandpaError;
    readonly isTreasury: boolean;
    readonly asTreasury: PalletTreasuryError;
    readonly isAssetRate: boolean;
    readonly asAssetRate: PalletAssetRateError;
    readonly isContracts: boolean;
    readonly asContracts: PalletContractsError;
    readonly isSudo: boolean;
    readonly asSudo: PalletSudoError;
    readonly isImOnline: boolean;
    readonly asImOnline: PalletImOnlineError;
    readonly isIdentity: boolean;
    readonly asIdentity: PalletIdentityError;
    readonly isSociety: boolean;
    readonly asSociety: PalletSocietyError;
    readonly isRecovery: boolean;
    readonly asRecovery: PalletRecoveryError;
    readonly isVesting: boolean;
    readonly asVesting: PalletVestingError;
    readonly isScheduler: boolean;
    readonly asScheduler: PalletSchedulerError;
    readonly isGlutton: boolean;
    readonly asGlutton: PalletGluttonError;
    readonly isPreimage: boolean;
    readonly asPreimage: PalletPreimageError;
    readonly isProxy: boolean;
    readonly asProxy: PalletProxyError;
    readonly isMultisig: boolean;
    readonly asMultisig: PalletMultisigError;
    readonly isBounties: boolean;
    readonly asBounties: PalletBountiesError;
    readonly isTips: boolean;
    readonly asTips: PalletTipsError;
    readonly isAssets: boolean;
    readonly asAssets: PalletAssetsError;
    readonly isPoolAssets: boolean;
    readonly asPoolAssets: PalletAssetsError;
    readonly isBeefy: boolean;
    readonly asBeefy: PalletBeefyError;
    readonly isLottery: boolean;
    readonly asLottery: PalletLotteryError;
    readonly isNis: boolean;
    readonly asNis: PalletNisError;
    readonly isUniques: boolean;
    readonly asUniques: PalletUniquesError;
    readonly isNfts: boolean;
    readonly asNfts: PalletNftsError;
    readonly isNftFractionalization: boolean;
    readonly asNftFractionalization: PalletNftFractionalizationError;
    readonly isSalary: boolean;
    readonly asSalary: PalletSalaryError;
    readonly isCoreFellowship: boolean;
    readonly asCoreFellowship: PalletCoreFellowshipError;
    readonly isTransactionStorage: boolean;
    readonly asTransactionStorage: PalletTransactionStorageError;
    readonly isVoterList: boolean;
    readonly asVoterList: PalletBagsListError;
    readonly isStateTrieMigration: boolean;
    readonly asStateTrieMigration: PalletStateTrieMigrationError;
    readonly isChildBounties: boolean;
    readonly asChildBounties: PalletChildBountiesError;
    readonly isReferenda: boolean;
    readonly asReferenda: PalletReferendaError;
    readonly isRemark: boolean;
    readonly asRemark: PalletRemarkError;
    readonly isConvictionVoting: boolean;
    readonly asConvictionVoting: PalletConvictionVotingError;
    readonly isWhitelist: boolean;
    readonly asWhitelist: PalletWhitelistError;
    readonly isAllianceMotion: boolean;
    readonly asAllianceMotion: PalletCollectiveError;
    readonly isAlliance: boolean;
    readonly asAlliance: PalletAllianceError;
    readonly isNominationPools: boolean;
    readonly asNominationPools: PalletNominationPoolsError;
    readonly isRankedPolls: boolean;
    readonly asRankedPolls: PalletReferendaError;
    readonly isRankedCollective: boolean;
    readonly asRankedCollective: PalletRankedCollectiveError;
    readonly isAssetConversion: boolean;
    readonly asAssetConversion: PalletAssetConversionError;
    readonly isFastUnstake: boolean;
    readonly asFastUnstake: PalletFastUnstakeError;
    readonly isMessageQueue: boolean;
    readonly asMessageQueue: PalletMessageQueueError;
    readonly isTxPause: boolean;
    readonly asTxPause: PalletTxPauseError;
    readonly isSafeMode: boolean;
    readonly asSafeMode: PalletSafeModeError;
    readonly isMultiBlockMigrations: boolean;
    readonly asMultiBlockMigrations: PalletMigrationsError;
    readonly isBroker: boolean;
    readonly asBroker: PalletBrokerError;
    readonly isTasksExample: boolean;
    readonly asTasksExample: PalletExampleTasksError;
    readonly isAssetConversionMigration: boolean;
    readonly asAssetConversionMigration: PalletAssetConversionOpsError;
    readonly isRevive: boolean;
    readonly asRevive: PalletReviveError;
    readonly isDelegatedStaking: boolean;
    readonly asDelegatedStaking: PalletDelegatedStakingError;
    readonly isAssetRewards: boolean;
    readonly asAssetRewards: PalletAssetRewardsError;
    readonly isAssetsFreezer: boolean;
    readonly asAssetsFreezer: PalletAssetsFreezerError;
    readonly isMetaTx: boolean;
    readonly asMetaTx: PalletMetaTxError;
    readonly type: 'System' | 'Utility' | 'Babe' | 'Indices' | 'Balances' | 'ElectionProviderMultiPhase' | 'Staking' | 'Session' | 'Democracy' | 'Council' | 'TechnicalCommittee' | 'Elections' | 'TechnicalMembership' | 'Grandpa' | 'Treasury' | 'AssetRate' | 'Contracts' | 'Sudo' | 'ImOnline' | 'Identity' | 'Society' | 'Recovery' | 'Vesting' | 'Scheduler' | 'Glutton' | 'Preimage' | 'Proxy' | 'Multisig' | 'Bounties' | 'Tips' | 'Assets' | 'PoolAssets' | 'Beefy' | 'Lottery' | 'Nis' | 'Uniques' | 'Nfts' | 'NftFractionalization' | 'Salary' | 'CoreFellowship' | 'TransactionStorage' | 'VoterList' | 'StateTrieMigration' | 'ChildBounties' | 'Referenda' | 'Remark' | 'ConvictionVoting' | 'Whitelist' | 'AllianceMotion' | 'Alliance' | 'NominationPools' | 'RankedPolls' | 'RankedCollective' | 'AssetConversion' | 'FastUnstake' | 'MessageQueue' | 'TxPause' | 'SafeMode' | 'MultiBlockMigrations' | 'Broker' | 'TasksExample' | 'AssetConversionMigration' | 'Revive' | 'DelegatedStaking' | 'AssetRewards' | 'AssetsFreezer' | 'MetaTx';
  }

} // declare module
