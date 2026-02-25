export type OpenWearablesModuleEvents = {
  onLog: (params: LogEventPayload) => void;
  onAuthError: (params: AuthErrorEventPayload) => void;
};

export type LogEventPayload = {
  message: string;
};

export type AuthErrorEventPayload = {
  statusCode: number;
  message: string;
};

export type HealthDataType =
  // Activity & Mobility
  | "steps"
  | "distanceWalkingRunning"
  | "distanceCycling"
  | "flightsClimbed"
  | "walkingSpeed"
  | "walkingStepLength"
  | "walkingAsymmetryPercentage"
  | "walkingDoubleSupportPercentage"
  | "sixMinuteWalkTestDistance"
  | "activeEnergy"
  | "basalEnergy"

  // Heart & Cardiovascular
  | "heartRate"
  | "restingHeartRate"
  | "heartRateVariabilitySDNN"
  | "vo2Max"
  | "oxygenSaturation"
  | "respiratoryRate"

  // Body Measurements
  | "bodyMass"
  | "height"
  | "bmi"
  | "bodyFatPercentage"
  | "leanBodyMass"
  | "waistCircumference"
  | "bodyTemperature"

  // Blood & Metabolic
  | "bloodGlucose"
  | "insulinDelivery"
  | "bloodPressureSystolic"
  | "bloodPressureDiastolic"
  | "bloodPressure"

  // Sleep & Mindfulness
  | "sleep"
  | "mindfulSession"

  // Reproductive Health
  | "menstrualFlow"
  | "cervicalMucusQuality"
  | "ovulationTestResult"
  | "sexualActivity"

  // Nutrition
  | "dietaryEnergyConsumed"
  | "dietaryCarbohydrates"
  | "dietaryProtein"
  | "dietaryFatTotal"
  | "dietaryWater"

  // Workout
  | "workout"

  // Aliases
  | "restingEnergy"
  | "bloodOxygen";
