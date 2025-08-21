# Blinking Events Website

This is the codebase for the Blinking Events website, an event planning company based in Cameroon.

## Map Integration

This project uses Mapbox for interactive maps showing service locations across Cameroon. 

### Environment Setup

To use the map features, you need to set up a Mapbox API key:

1. Create a `.env.local` file in the root directory
2. Add your Mapbox token:
   ```
   NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token
   ```

### Map Components

- `LocationMap`: The main map component that displays markers for office locations and venues
- Found in various pages:
  - Contact page: Shows all office locations
  - Service detail pages: Shows service availability in different cities
  - Home page (Regions section): Interactive map showing our coverage areas

### Customizing Map Locations

To add or modify map locations, edit the location data objects in the respective page components.

## Development

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.
