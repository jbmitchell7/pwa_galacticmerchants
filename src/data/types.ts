export interface AllFlightsPlan {
    id: string
    createdAt: string
    arrivesAt: string
    departure: string
    shipId: string
    destination: string
    shipType: string
    username: string
}

export interface AvailableStructure {
    allowedLocationTypes: string[]
    consumes: string[]
    price: number
    name: string
    produces: string[]
    symbol: string
}

export interface AvailableLoan {
    type: string
    amount: number
    rate: number
    termInDays: number
    collateralRequired: boolean
}

export interface Cargo {
    good: string
    quantity: number
    totalVolume?: number
}

export interface Coordinates {
    x: number
    y: number
}

export interface FlightPlan {
    arrivesAt: string
    createdAt: string
    departure: string
    destination: string
    distance: number
    fuelConsumed: number
    fuelRemaining: number
    id: string
    shipId: string
    terminatedAt: string
    timeRemainingInSeconds: number
}

export interface Loan {
    type: string
    repaymentAamount: number
    id: string
    status: string
    due: string
}

export interface Location extends Coordinates {
    name: string
    symbol: string
    type: string
    allowsConstruction: boolean
    traits: string[]
}

export interface LocationWithMarketplace {
    marketplace: Marketplace[]
}

export interface Marketplace {
    quantityAvailable: number
    pricePerUnit: number
    volumePerUnit: number
    symbol: string
    spread: number
    sellPricePerUnit: number
    purchasePricePerUnit: number
}

export interface Order {
    good: string
    pricePerUnit: number
    quantity: number
    total: number
}

export interface Ship extends Coordinates {
    class: string
    manufacturer: string
    maxCargo: number
    plating: number
    purchaseLocations: any[]
    speed: number
    type: string
    weapons: number
}

export interface StructureDetails {
    id: string
    completed: boolean
    materials: string[]
    name: string
    stability: number
}

export interface System {
    symbol: string
    name: string
}

export interface User {
    username: string
    credits: number
    shipCount: number
    structureCount: number
    joinedAt: string
}

export interface YourLoan {
    due: string
    id: string
    repaymentAmount: boolean
    status: string
    type: string
}

export interface YourShip extends Coordinates {
    cargo: Cargo[]
    class: string
    id: string
    location?: string
    manufacturer: string
    maxCargo: number
    plating: number
    spaceAvailable: number
    speed: number
    type: string
    weapons: number
    loadingSpeed: number
}

// Responses

export interface AccountResponse {
    user: User
}

export interface AvailableLoanResponse {
    loans: AvailableLoan[]
}

export interface AvailableShipResponse {
    shipListings: Ship[]
}

export interface AvailableStructureResponse {
    structures: AvailableStructure[]
}

export interface CreateStructureResponse {
    structure: StructureDetails
}

export interface ErrorResponse {
    error: {
        code: number
        message: string
    }
}

export interface FlightPlanResponse {
    flightPlan: FlightPlan
}

export interface FlightPlansResponse {
    flightPlans: AllFlightsPlan[]
}

export interface JettisonResponse {
    good: string
    quantityRemaining: number
    shipId: string
}

export interface ListStructuresResponse {
    structures: StructureDetails[]
}

export interface LocationResponse {
    dockedShips: number
    location: Location
}

export interface LocationShipsResponse {
    ships: Ship[]
}

export interface LocationsResponse {
    locations: Location[]
}

export interface MarketplaceResponse {
    marketplace: Marketplace[]
}

export interface PurchaseResponse {
    credits: number
    ship: YourShip
}

export type SellResponse = PurchaseResponse & { order: Order } // This is for a bug in spacetraders. Should be removed once fixed.

export interface ShipSellResponse {
    success: string
}

export interface ShipResponse {
    ships: YourShip & { flightPlanId?: string }
}

export interface ShipsResponse {
    ships: YourShip[]
}

export interface ShipTransferResponse {
    fromShip: YourShip
    toShip: YourShip
}

export interface SystemsResponse {
    systems: System[]
}

export interface StatusResponse {
    status: string
}

export interface StructureDepositResponse {
    deposit: Cargo
    ship: YourShip
    structure: StructureDetails
}

export interface StructureTransferResponse {
    transfer: Cargo
    ship: YourShip
    structure: StructureDetails
}

export interface TokenResponse {
    token: string
    user: {
        username: string
        credits: number
        ships: []
        loans: []
    }
}