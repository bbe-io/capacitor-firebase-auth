import Foundation
import Capacitor

protocol ProviderHandler {
    func initialize(plugin: BbeIoCapacitorFirebaseAuth) -> Void
    func signIn(call: CAPPluginCall) -> Void
    func signOut() throws -> Void
    func isAuthenticated() -> Bool
    func fillResult(data: PluginResultData) -> PluginResultData
}
