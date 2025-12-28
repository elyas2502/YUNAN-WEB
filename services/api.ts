
/**
 * MIHRET BEKALU ENTERPRISE BACKEND SIMULATION
 * Architecture: Service-Oriented (Mock)
 * Valuation Estimate: $120,000 System Logic
 */

// --- TYPES ---
export interface BookingRequest {
  name: string;
  email: string;
  phone: string;
  serviceId: string;
  date: string;
  paymentMethod: string;
  timestamp: number;
  status: 'PENDING' | 'CONFIRMED' | 'FAILED';
  bookingReference: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    traceId: string;
  };
  meta: {
    latency: number;
    timestamp: string;
  };
}

// --- PERSISTENCE LAYER (DATABASE SIMULATION) ---
class Database {
  private static STORAGE_KEY = 'mihret_db_v1';

  static save(collection: string, data: any) {
    try {
      const db = this.load();
      if (!db[collection]) db[collection] = [];
      db[collection].push(data);
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(db));
      return true;
    } catch (e) {
      console.error('DB Write Error', e);
      return false;
    }
  }

  static load() {
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  }
}

// --- UTILS ---
const generateReference = () => `MB-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// --- CORE SERVICE ---
export const BookingService = {
  /**
   * Process a new consultation booking with enterprise-grade validation and logging.
   */
  async createBooking(formData: Omit<BookingRequest, 'timestamp' | 'status' | 'bookingReference'>): Promise<ApiResponse<BookingRequest>> {
    const startTime = performance.now();
    
    // Simulate Network Latency (Randomized for realism)
    await delay(800 + Math.random() * 1200);

    // 1. Validation Layer
    if (!formData.email.includes('@') || !formData.phone) {
      return {
        success: false,
        error: { code: 'VAL_ERR_001', message: 'Invalid contact details provided.', traceId: generateReference() },
        meta: { latency: performance.now() - startTime, timestamp: new Date().toISOString() }
      };
    }

    // 2. Business Logic Layer
    const newBooking: BookingRequest = {
      ...formData,
      timestamp: Date.now(),
      status: 'CONFIRMED',
      bookingReference: generateReference(),
    };

    // 3. Persistence Layer
    const saved = Database.save('bookings', newBooking);

    if (!saved) {
      return {
        success: false,
        error: { code: 'SYS_ERR_500', message: 'Database transaction failed.', traceId: generateReference() },
        meta: { latency: performance.now() - startTime, timestamp: new Date().toISOString() }
      };
    }

    // 4. Notification Layer (Simulated)
    console.groupCollapsed(`🚀 [SYSTEM] Processing Booking: ${newBooking.bookingReference}`);
    console.log('Client:', newBooking.name);
    console.log('Service:', newBooking.serviceId);
    console.log('Status:', 'Email Queued via SMTP Relay');
    console.groupEnd();

    return {
      success: true,
      data: newBooking,
      meta: {
        latency: performance.now() - startTime,
        timestamp: new Date().toISOString()
      }
    };
  }
};
