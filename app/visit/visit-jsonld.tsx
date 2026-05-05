import { JsonLd } from '@/components/JsonLd';
import { recurringEventLd } from '@/lib/jsonld';

export function VisitJsonLd() {
  return <JsonLd data={recurringEventLd} />;
}
