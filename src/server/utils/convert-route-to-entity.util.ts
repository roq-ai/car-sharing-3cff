const mapping: Record<string, string> = {
  bookings: 'booking',
  cars: 'car',
  organizations: 'organization',
  reviews: 'review',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
