import { BigInt } from "@graphprotocol/graph-ts"
import {
  EGG,
  ReferralDrop,
  Transfer,
  Approval,
  Locked,
  UnlockedAll,
  UnlockedIndex,
  Burn,
  Stopped,
  Started,
  OwnershipTransferred,
  Allowed,
  RemoveAllowed
} from "../generated/EGG/EGG"
import { ExampleEntity } from "../generated/schema"

export function handleReferralDrop(event: ReferralDrop): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.from = event.params.from
  entity.to1 = event.params.to1

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.name(...)
  // - contract.approve(...)
  // - contract.totalSupply(...)
  // - contract.transferFrom(...)
  // - contract.balances(...)
  // - contract.decimals(...)
  // - contract.referralDrop(...)
  // - contract.isStopped(...)
  // - contract.version(...)
  // - contract.lockedBalanceOf(...)
  // - contract.removeAllowed(...)
  // - contract.balanceOf(...)
  // - contract.unlock(...)
  // - contract.owner(...)
  // - contract.isOwner(...)
  // - contract.symbol(...)
  // - contract.isLocked(...)
  // - contract.isAllowed(...)
  // - contract.approvals(...)
  // - contract.lockup(...)
  // - contract.transfer(...)
  // - contract.unlockAll(...)
  // - contract.allowance(...)
  // - contract.transferWithLock(...)
  // - contract.allow(...)
}

export function handleTransfer(event: Transfer): void {}

export function handleApproval(event: Approval): void {}

export function handleLocked(event: Locked): void {}

export function handleUnlockedAll(event: UnlockedAll): void {}

export function handleUnlockedIndex(event: UnlockedIndex): void {}

export function handleBurn(event: Burn): void {}

export function handleStopped(event: Stopped): void {}

export function handleStarted(event: Started): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleAllowed(event: Allowed): void {}

export function handleRemoveAllowed(event: RemoveAllowed): void {}
