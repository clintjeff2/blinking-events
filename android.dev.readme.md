# Blinking Events Mobile App - Technical Development Guide

## Technology Stack

### Core Framework
- **React Native (v0.73+)**: Cross-platform framework for both Android and iOS development
- **Expo (SDK 50+)**: Streamlined React Native development toolkit
- **TypeScript**: For type-safe code and improved developer experience

### State Management & Data Flow
- **Redux Toolkit**: For global state management
- **React Query**: For server state management and data fetching
- **AsyncStorage**: For local persistent storage

### UI Components & Styling
- **React Native Paper**: Material Design components
- **React Native Elements**### Security Measures

- Secure storage for sensitive data
- Firebase App Check for preventing unauthorized API access
- Firebase Security Rules for data protection
- Input validation to prevent injection attacks
- Certificate pinning for API connections
- Obfuscation of production builds
- Regular security audits
- Firebase Crash Analytics for monitoring security issuesonal UI components
- **Styled Components**: For component styling
- **React Native Reanimated**: For advanced animations
- **React Native Gesture Handler**: For gesture interactions

### Navigation & Routing
- **React Navigation v6**: For app navigation structure
  - Stack Navigator for linear flows
  - Tab Navigator for main app sections
  - Drawer Navigator for menu access

### Authentication & Security
- **Firebase Authentication**: For user authentication
- **Secure Store**: For secure token storage
- **Firebase Security Rules**: For API and database security

### Backend Integration
- **Firebase Firestore**: For database and API requests
- **Firebase Realtime Database**: For real-time communication
- **Firebase Cloud Functions**: For serverless backend functionality
- **Formik**: For form handling
- **Yup**: For form validation

### Media & Assets
- **React Native FastImage**: For optimized image loading
- **React Native Video**: For video playback
- **React Native SVG**: For vector graphics
- **React Native Maps**: For location mapping features

### Testing & Quality Assurance
- **Jest**: For unit testing
- **React Native Testing Library**: For component testing
- **Detox**: For end-to-end testing
- **ESLint & Prettier**: For code quality and formatting

### Build & Deployment
- **Expo Application Services (EAS)**: For build pipeline
- **Fastlane**: For automated deployment
- **CodePush**: For over-the-air updates

## Project Structure

```
blinking-events-mobile/
├── app.json             # Expo configuration
├── App.tsx              # App entry point
├── babel.config.js      # Babel configuration
├── tsconfig.json        # TypeScript configuration
├── assets/              # Static assets (images, fonts, etc.)
├── src/
│   ├── api/             # API services and endpoints
│   ├── components/      # Reusable UI components
│   │   ├── ui/          # Basic UI elements
│   │   └── screens/     # Screen-specific components
│   ├── constants/       # App constants and configuration
│   ├── hooks/           # Custom React hooks
│   ├── navigation/      # Navigation configuration
│   ├── screens/         # App screens
│   │   ├── auth/        # Authentication screens
│   │   ├── services/    # Service browsing screens
│   │   ├── profile/     # User profile screens
│   │   ├── orders/      # Order management screens
│   │   └── admin/       # Admin panel screens
│   ├── store/           # Redux store setup
│   │   ├── slices/      # Redux slices
│   │   └── selectors/   # Redux selectors
│   ├── types/           # TypeScript type definitions
│   └── utils/           # Utility functions
└── __tests__/          # Test files
```

## Design System & Branding Guidelines

### Color Palette

#### Primary Brand Colors
- **Primary Red**: `#E1262C` - Main brand color for CTAs, headers
- **Charcoal**: `#1D1D1F` - Secondary color for text and backgrounds
- **Gold**: `#C8A64B` - Accent color for highlights and premium elements
- **White**: `#FFFFFF` - Background color and text on dark backgrounds
- **Soft Gray**: `#F5F5F7` - Secondary background color, muted elements

#### Supporting Colors
- **Success**: `#28A745` - For success states and confirmations
- **Warning**: `#FFC107` - For warnings and alerts
- **Error**: `#DC3545` - For error states
- **Info**: `#17A2B8` - For information messages

#### Color Usage Guidelines
- Use Primary Red for primary actions and brand identity elements
- Use Gold for premium features, highlights, and secondary actions
- Use Charcoal for text on light backgrounds
- Use White for text on dark backgrounds and for clean spaces
- Maintain appropriate contrast ratios for accessibility (WCAG AA standard)

### Typography

#### Font Families
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Accents/UI**: Inter (sans-serif)

#### Font Weights
- **Regular**: 400
- **Medium**: 500
- **Semibold**: 600
- **Bold**: 700

#### Font Sizes (scaled for mobile)
- **Display**: 32px
- **Heading 1**: 28px
- **Heading 2**: 24px
- **Heading 3**: 20px
- **Heading 4**: 18px
- **Body Large**: 16px
- **Body**: 14px
- **Caption**: 12px

### Spacing System
Based on 4px increments:
- **xs**: 4px
- **sm**: 8px
- **md**: 16px
- **lg**: 24px
- **xl**: 32px
- **2xl**: 40px
- **3xl**: 48px
- **4xl**: 64px

### Component Library

Create reusable components with consistent styling:

#### Basic UI Elements
- Buttons (Primary, Secondary, Outline, Ghost)
- Cards (Service Card, Gallery Card, Testimonial Card)
- Form Elements (Inputs, Selects, Checkboxes)
- Badges and Tags
- Avatars and Images
- Icons (using Lucide React Native)

#### Complex Components
- Service Listing Cards
- Staff Profile Cards
- Order Request Forms
- Image Galleries
- Testimonial Carousels
- Package Comparison Tables
- Notification Components

### Animation Guidelines
- Use subtle animations for state changes (0.2-0.3s duration)
- Use more pronounced animations for transitions between screens (0.3-0.5s duration)
- Implement skeleton loading states for data fetching
- Use motion to guide users through flows and indicate actions
- Ensure animations perform well on lower-end devices

## Firebase Integration

### Firebase Configuration
```typescript
// Example Firebase configuration and service structure
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, getDoc, doc, query, where, addDoc } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getDatabase, ref as dbRef, onValue, push, set } from 'firebase/database';
import { getMessaging, getToken } from 'firebase/messaging';

// Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "blinking-events-app.firebaseapp.com",
  projectId: "blinking-events-app",
  storageBucket: "blinking-events-app.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

// Initialize Firebase services
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const rtdb = getDatabase(app);
const messaging = getMessaging(app);

// Service API implementations
export const servicesApi = {
  getAll: async () => {
    const querySnapshot = await getDocs(collection(db, 'services'));
    return querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
  },
  getById: async (id: string) => {
    const docRef = doc(db, 'services', id);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? {id: docSnap.id, ...docSnap.data()} : null;
  },
  getByCategory: async (category: string) => {
    const q = query(collection(db, 'services'), where('category', '==', category));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
  },
};

export const ordersApi = {
  create: async (orderData: OrderRequest) => {
    const docRef = await addDoc(collection(db, 'orders'), orderData);
    return {id: docRef.id, ...orderData};
  },
  getById: async (id: string) => {
    const docRef = doc(db, 'orders', id);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? {id: docSnap.id, ...docSnap.data()} : null;
  },
  getByUser: async (userId: string) => {
    const q = query(collection(db, 'orders'), where('userId', '==', userId));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
  },
};

// Additional Firebase services for real-time data, storage, messaging, etc.
```

### Data Models

#### Service Model
```typescript
interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  category: ServiceCategory;
  pricing: string;
  priceRangeMin: number;
  priceRangeMax: number;
  currency: string;
  featured: boolean;
  coverImage: string;
  images: string[];
  icon: string;
  deliverables: string[];
  process: {
    title: string;
    description: string;
  }[];
  packages: ServicePackage[];
  testimonials: Testimonial[];
  locations: string[];
}

interface ServicePackage {
  id: string;
  name: string;
  price: string | number;
  features: string[];
  popular?: boolean;
}

enum ServiceCategory {
  PLANNING = 'planning',
  STAFFING = 'staffing',
  PRODUCTION = 'production',
  CATERING = 'catering',
  EQUIPMENT = 'equipment',
}
```

#### Staff Profile Model
```typescript
interface StaffProfile {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
  serviceId: string;
  skills: string[];
  languages: string[];
  experience: number; // years
  rating: number;
  testimonials: Testimonial[];
  availability: {
    date: string;
    available: boolean;
  }[];
}
```

#### Order Model
```typescript
interface OrderRequest {
  eventType: string;
  eventDate: string;
  eventLocation: string;
  guestCount: number;
  services: {
    serviceId: string;
    packageId?: string;
    staffIds?: string[];
    quantity?: number;
    notes?: string;
  }[];
  specialRequirements?: string;
  budgetRange?: {
    min: number;
    max: number;
  };
  contactInfo: {
    name: string;
    email: string;
    phone: string;
  };
}

interface Order extends OrderRequest {
  id: string;
  status: OrderStatus;
  createdAt: string;
  updatedAt: string;
  quote?: {
    amount: number;
    currency: string;
    validUntil: string;
    lineItems: {
      description: string;
      quantity: number;
      unitPrice: number;
      totalPrice: number;
    }[];
  };
}

enum OrderStatus {
  PENDING = 'pending',
  QUOTED = 'quoted',
  CONFIRMED = 'confirmed',
  IN_PROGRESS = 'in-progress',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}
```

## Authentication Flow

1. **User Registration**
   - User fills registration form (name, email, password)
   - Validation of inputs
   - Firebase Authentication createUserWithEmailAndPassword
   - Create user profile document in Firestore
   - Navigate to home screen

2. **User Login**
   - User enters credentials
   - Validation of inputs
   - Firebase Authentication signInWithEmailAndPassword
   - Fetch user profile data from Firestore
   - Navigate to home screen

3. **Social Authentication**
   - Google/Facebook sign-in options
   - Firebase AuthCredential handling
   - Create or update user profile

4. **Authentication State Management**
   - Firebase onAuthStateChanged listener
   - Handle authentication state persistence
   - Manage auth session across app restarts

5. **Admin Authentication**
   - Custom claims in Firebase Auth for admin roles
   - Role-based access control via Firestore security rules
   - Admin-specific screens and features

## Key Screen Implementations

### Service Browse Screen
```typescript
const ServiceBrowseScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | null>(null);
  const { data: services, isLoading } = useQuery(
    ['services', selectedCategory],
    () => selectedCategory 
      ? servicesApi.getByCategory(selectedCategory)
      : servicesApi.getAll(),
    {
      // Using Firebase, we can set up listeners instead of one-time fetches
      onSuccess: (data) => {
        // Process Firestore data if needed
      }
    }
  );
  
  if (isLoading) {
    return <ServiceListSkeleton />;
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Our Services</Text>
      
      <CategoryFilters
        categories={Object.values(ServiceCategory)}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />
      
      <FlatList
        data={services}
        renderItem={({ item }) => (
          <ServiceCard
            service={item}
            onPress={() => navigation.navigate('ServiceDetails', { serviceId: item.id })}
          />
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.servicesList}
      />
    </SafeAreaView>
  );
};
```

### Service Detail Screen
```typescript
const ServiceDetailScreen = ({ route }) => {
  const { serviceId } = route.params;
  const { data: service, isLoading } = useQuery(
    ['service', serviceId],
    () => servicesApi.getById(serviceId)
  );
  
  if (isLoading) {
    return <ServiceDetailSkeleton />;
  }
  
  return (
    <ScrollView style={styles.container}>
      <ImageCarousel images={service.images} />
      
      <View style={styles.content}>
        <Text style={styles.title}>{service.title}</Text>
        <Text style={styles.pricing}>{service.pricing}</Text>
        <Text style={styles.description}>{service.description}</Text>
        
        <Section title="What's Included">
          <DeliverablesChecklist items={service.deliverables} />
        </Section>
        
        <Section title="Our Process">
          <ProcessTimeline process={service.process} />
        </Section>
        
        <Section title="Packages">
          <PackageCards packages={service.packages} onSelect={handlePackageSelect} />
        </Section>
        
        {service.testimonials.length > 0 && (
          <Section title="Client Testimonials">
            <TestimonialCarousel testimonials={service.testimonials} />
          </Section>
        )}
        
        <Button 
          mode="contained" 
          onPress={handleRequestQuote}
          style={styles.quoteButton}
        >
          Request a Quote
        </Button>
      </View>
    </ScrollView>
  );
};
```

## Admin Panel Implementation

The Admin Panel should be a separate section of the app, accessible only to authenticated administrators:

```typescript
### Analytics Dashboard
```typescript
// Basic admin panel structure using Firebase
const AdminPanel = () => {
  const { user } = useAuth();
  const { data: adminClaims } = useQuery(['adminClaims', user?.uid], 
    async () => {
      // Get custom claims from Firebase Auth
      const idTokenResult = await user?.getIdTokenResult();
      return idTokenResult?.claims?.admin === true;
    },
    { enabled: !!user }
  );
  
  if (!user || !adminClaims) {
    return <AdminLoginScreen />;
  }
  
  return (
    <AdminTabNavigator>
      <Tab.Screen name="Dashboard" component={AdminDashboardScreen} />
      <Tab.Screen name="Services" component={AdminServicesScreen} />
      <Tab.Screen name="Staff" component={AdminStaffScreen} />
      <Tab.Screen name="Orders" component={AdminOrdersScreen} />
      <Tab.Screen name="Analytics" component={AdminAnalyticsScreen} />
    </AdminTabNavigator>
  );
};
```

### Service Management
```typescript
const AdminServiceEditScreen = ({ route }) => {
  const { serviceId } = route.params;
  const { data: service } = useQuery(
    ['adminService', serviceId],
    async () => {
      if (serviceId) {
        const docRef = doc(db, 'services', serviceId);
        const docSnap = await getDoc(docRef);
        return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
      }
      return null;
    }
  );
  
  const [form, setForm] = useState({
    title: service?.title || '',
    description: service?.description || '',
    // ... other fields
  });
  
  const handleImageUpload = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    const imageRef = ref(storage, `services/${serviceId || 'new'}-${Date.now()}`);
    await uploadBytes(imageRef, blob);
    return await getDownloadURL(imageRef);
  };
  
  const mutation = useMutation(
    async (data) => {
      if (data.imageUri) {
        data.imageUrl = await handleImageUpload(data.imageUri);
        delete data.imageUri;
      }
      
      if (serviceId) {
        const serviceRef = doc(db, 'services', serviceId);
        await updateDoc(serviceRef, data);
        return { id: serviceId, ...data };
      } else {
        const docRef = await addDoc(collection(db, 'services'), data);
        return { id: docRef.id, ...data };
      }
    },
    {
      onSuccess: () => {
        navigation.goBack();
      }
    }
  );
  
  const handleSave = async () => {
    try {
      mutation.mutate(form);
    } catch (error) {
      // Error handling
    }
  };
  
  return (
    <ScrollView>
      <ServiceForm
        initialValues={form}
        onChange={setForm}
        onSubmit={handleSave}
        isLoading={mutation.isLoading}
      />
    </ScrollView>
  );
};
```

## Testing Strategy

### Unit Testing
- Test utility functions, hooks, and redux slices
- Use Jest for assertions and mocking

### Component Testing
- Test UI components in isolation
- Verify component rendering and interactions
- Use React Native Testing Library

### Integration Testing
- Test integration between components and services
- Test navigation flows and data passing

### End-to-End Testing
- Test complete user journeys
- Use Detox for automated E2E testing
- Cover critical paths like service browsing, order creation

## Performance Optimization

- **Image Optimization**
  - Use FastImage for efficient image loading
  - Implement progressive loading for galleries
  - Use proper image resizing and caching

- **List Virtualization**
  - Use FlatList with optimized rendering
  - Implement pagination for long lists
  - Use memo and callbacks for optimized rerenders

- **State Management**
  - Minimize global state updates
  - Use local component state where appropriate
  - Implement selective rerendering with memoization

- **Network Optimization**
  - Implement Firebase offline persistence
  - Cache responses with React Query + Firebase
  - Use Firebase Performance Monitoring
  - Set appropriate Firestore cache sizes and expiration policies

## Deployment Strategy

### Initial Release
1. **Alpha Testing**: Internal team testing
2. **Beta Testing**: Limited client testing
3. **Public Release**: Google Play Store and Apple App Store

### Update Cycle
- Bi-weekly updates for bug fixes
- Monthly feature updates
- Use CodePush for non-breaking changes

### CI/CD Pipeline
- Automated building with GitHub Actions
- Integration testing before deployment
- Automated submission to app stores

## Accessibility Considerations

- Implement proper accessibility labels for screen readers
- Ensure sufficient color contrast (WCAG AA standard)
- Support dynamic text sizes
- Provide alternative text for images
- Test with VoiceOver and TalkBack

## Localization Support

- Implement i18next for translations
- Support English and French initially
- Structure for easy addition of other languages
- Use ICU message format for plurals and complex translations

## Security Measures

- Secure storage for sensitive data
- API request encryption
- Input validation to prevent injection attacks
- Certificate pinning for API connections
- Obfuscation of production builds
- Regular security audits

## Firebase Functionality Implementation

### Push Notifications
```typescript
// Push notification setup using Firebase Cloud Messaging
import { Platform } from 'react-native';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Notifications from 'expo-notifications';

// Request permission and register for push notifications
export const registerForPushNotifications = async () => {
  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'Default',
      importance: Notifications.AndroidImportance.MAX,
    });
  }
  
  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  
  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }
  
  if (finalStatus !== 'granted') {
    return false;
  }
  
  // Get FCM token
  const messaging = getMessaging();
  const token = await getToken(messaging);
  
  // Store token in Firestore for this user
  const user = auth.currentUser;
  if (user) {
    const userRef = doc(db, 'users', user.uid);
    await updateDoc(userRef, {
      fcmTokens: arrayUnion(token)
    });
  }
  
  // Save locally
  await AsyncStorage.setItem('pushToken', token);
  
  // Listen for foreground messages
  onMessage(messaging, (message) => {
    const { title, body, data } = message.notification;
    Notifications.scheduleNotificationAsync({
      content: {
        title,
        body,
        data: data || {},
      },
      trigger: null,
    });
  });
  
  return true;
};

// Handle notification tap
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});
```

### Real-time Communication
```typescript
// Real-time chat implementation using Firebase Realtime Database
import { getDatabase, ref, onValue, push, set } from 'firebase/database';

const ChatScreen = ({ route }) => {
  const { orderId } = route.params;
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const user = auth.currentUser;
  
  useEffect(() => {
    const db = getDatabase();
    const chatRef = ref(db, `chats/${orderId}`);
    
    // Listen for new messages in real time
    const unsubscribe = onValue(chatRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const messageList = Object.entries(data).map(([key, value]) => ({
          id: key,
          ...value,
          createdAt: new Date(value.createdAt),
        }));
        
        // Sort by timestamp
        setMessages(messageList.sort((a, b) => b.createdAt - a.createdAt));
      }
    });
    
    return () => unsubscribe();
  }, [orderId]);
  
  const sendMessage = () => {
    if (newMessage.trim().length === 0) return;
    
    const db = getDatabase();
    const chatRef = ref(db, `chats/${orderId}`);
    const newMessageRef = push(chatRef);
    
    set(newMessageRef, {
      text: newMessage,
      createdAt: Date.now(),
      userId: user.uid,
      userName: user.displayName || 'User',
      userPhotoURL: user.photoURL || null,
    });
    
    setNewMessage('');
  };
  
  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MessageItem message={item} currentUser={user} />}
        inverted
      />
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={newMessage}
          onChangeText={setNewMessage}
          placeholder="Type a message..."
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
```

### Media Storage
```typescript
// Media upload and management with Firebase Storage
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import * as ImagePicker from 'expo-image-picker';

const ImageUploadComponent = ({ onImageUploaded }) => {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.8,
    });
    
    if (!result.cancelled && result.assets && result.assets[0].uri) {
      uploadImage(result.assets[0].uri);
    }
  };
  
  const uploadImage = async (uri) => {
    setUploading(true);
    setProgress(0);
    
    const response = await fetch(uri);
    const blob = await response.blob();
    
    // Create unique filename
    const filename = `${Date.now()}-${Math.random().toString(36).substring(2)}`;
    const storageRef = ref(getStorage(), `uploads/${filename}`);
    
    // Upload with progress tracking
    const uploadTask = uploadBytesResumable(storageRef, blob);
    
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => {
        console.error('Upload error:', error);
        setUploading(false);
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        onImageUploaded(downloadURL);
        setUploading(false);
      }
    );
  };
  
  return (
    <View style={styles.container}>
      {uploading ? (
        <View style={styles.progressContainer}>
          <Progress.Bar progress={progress / 100} width={200} />
          <Text>{Math.round(progress)}%</Text>
        </View>
      ) : (
        <Button title="Pick an image" onPress={pickImage} />
      )}
    </View>
  );
};
```

## Implementation Roadmap

### Phase 1 (Weeks 1-4)
- Project setup and Firebase configuration
- Core navigation and basic screens
- Service browsing implementation with Firestore
- Initial UI components

### Phase 2 (Weeks 5-8)
- Firebase Authentication implementation
- Service detail screens with Firestore data
- Staff profile screens with Firebase Storage for media
- Basic order request form with Firestore integration

### Phase 3 (Weeks 9-12)
- Admin panel with Firebase Security Rules
- Order management flows with Firestore
- User profile features with Firebase Auth
- Media galleries and testimonials with Firebase Storage
- Firebase Cloud Messaging initial setup

### Phase 4 (Weeks 13-16)
- Advanced admin features with Firebase Admin SDK
- Analytics dashboard with Firebase Analytics integration
- Full push notification system with Firebase Cloud Messaging
- Real-time chat with Firebase Realtime Database
- Final polish and performance optimization

## Maintenance Plan
- Regular dependency updates
- Performance monitoring with Firebase Performance Monitoring
- Crash reporting through Firebase Crashlytics
- User feedback collection via in-app surveys
- Analytics review using Firebase Analytics dashboard
- Firebase A/B testing for feature experiments
- Quarterly feature planning based on analytics data
