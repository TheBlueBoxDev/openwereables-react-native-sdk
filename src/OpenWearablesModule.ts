import { NativeModule, requireNativeModule } from "expo";
import {
  HealthDataType,
  OpenWearablesModuleEvents,
} from "./OpenWearables.types";

declare class OpenWearablesModule extends NativeModule<OpenWearablesModuleEvents> {
  // MARK: - Configure
  configure(host: string): void;

  // MARK: - Auth
  signIn(
    userId: string,
    accessToken: string | null,
    refreshToken: string | null,
    apiKey: string | null
  ): void;
  signOut(): void;
  updateTokens(accessToken: string, refreshToken: string): void;
  restoreSession(): Promise<boolean>;
  isSessionValid(): boolean;

  // MARK: - HealthKit Authorization
  requestAuthorization(types: HealthDataType[]): Promise<boolean>;

  // MARK: - Sync
  startBackgroundSync(): Promise<boolean>;
  stopBackgroundSync(): void;
  syncNow(): Promise<void>;
  isSyncActive(): boolean;
  getSyncStatus(): Record<string, any>;
  resumeSync(): Promise<boolean>;
  resetAnchors(): void;
  getStoredCredentials(): Record<string, any | null>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<OpenWearablesModule>("OpenWearables");
