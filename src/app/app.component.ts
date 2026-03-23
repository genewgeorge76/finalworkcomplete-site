import { Component } from '@angular/core';

interface TimelineItem { year: string; event: string; }
interface Service { icon: string; title: string; description: string; }
interface Award { year: string; label: string; }
interface Project { icon: string; title: string; description: string; size: string; type: string; category: string; }
interface ContactMethod { icon: string; label: string; href: string; value: string; note?: string; }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'J. Worden & Sons Asphalt Paving';
  currentYear = new Date().getFullYear();
  navOpen = false;
  formSubmitted = false;
  activeFilter = 'all';
  filters = ['all', 'commercial', 'residential', 'sealcoating'];

  timeline: TimelineItem[] = [
    { year: '1984', event: 'J. Worden & Sons founded in Chester, Virginia. First-generation leadership sets the structural standards still used today.' },
    { year: '2000s', event: 'Expansion into commercial markets. Multi-city Virginia contracts secured. Second and third generation enter the business.' },
    { year: '2015', event: '4th-generation leadership transition. New management modernizes operations while preserving the family\'s structural standards and reputation.' },
    { year: '2018–2021', event: 'Four consecutive Best of Houzz awards earned, recognizing excellence in design and customer satisfaction.' },
    { year: 'Today', event: 'Multi-state commercial paving partner for KFC, Arby\'s, and Taco Bell. Serving 41 cities across Virginia with our 6-inch compacted stone structural standard.' },
  ];

  services: Service[] = [
    { icon: '🏢', title: 'Commercial Paving', description: 'Parking lots, drive-throughs, loading docks, and roadways for commercial properties. Full-depth construction with engineered sub-bases.' },
    { icon: '🏠', title: 'Residential Driveways', description: 'New driveway installation and full-replacement projects for homeowners who want commercial-grade durability underfoot.' },
    { icon: '🔄', title: 'Parking Lot Resurfacing', description: 'Mill-and-overlay resurfacing restores aging lots without the cost of full replacement. ADA-compliant striping included.' },
    { icon: '🖤', title: 'Sealcoating', description: 'Protective sealcoating that blocks UV damage, fuel spills, and freeze-thaw cycles — extending pavement life by years.' },
    { icon: '🔧', title: 'Crack Sealing', description: 'Hot-pour rubberized crack filling stops water infiltration before small fissures become expensive structural failures.' },
    { icon: '📐', title: 'Grading & Drainage', description: 'Proper site grading and drainage design to prevent standing water — the number one killer of asphalt surfaces.' },
  ];

  awards: Award[] = [
    { year: '2018', label: 'Service Excellence — Customer Satisfaction' },
    { year: '2019', label: 'Service Excellence — Customer Satisfaction' },
    { year: '2020', label: 'Service Excellence — Customer Satisfaction' },
    { year: '2021', label: 'Service Excellence — Customer Satisfaction' },
  ];

  projects: Project[] = [
    { icon: '🍗', title: 'KFC — Route 1, Richmond VA', description: 'Full-depth reclamation and resurfacing of a high-traffic drive-through and parking lot. Completed on schedule for franchise reopening.', size: '~8,500 sq ft', type: '🏢 Commercial', category: 'commercial' },
    { icon: '🥩', title: "Arby's — Hull Street, Richmond VA", description: "Overlay and re-striping of parking lot and drive-through lanes. Work completed overnight to minimize business disruption.", size: '~12,000 sq ft', type: '🏢 Commercial', category: 'commercial' },
    { icon: '🌮', title: 'Taco Bell — Chesterfield VA', description: 'New asphalt installation following site expansion. Includes ADA-compliant ramp transitions and concrete curb work.', size: '~10,000 sq ft', type: '🏢 Commercial', category: 'commercial' },
    { icon: '🏘️', title: 'Maidstone Village — Community Entrance Road', description: 'Full resurfacing of the neighborhood entrance and main internal road. HOA project coordinated across 120+ units in Chester, VA.', size: '~22,000 sq ft', type: '🏘️ HOA / Community', category: 'residential' },
    { icon: '🏠', title: 'Maidstone Village — Residential Driveways', description: 'New driveway installations for 14 single-family homes. Tight scheduling coordinated across active occupied residences.', size: '~700–1,200 sq ft each', type: '🏠 Residential', category: 'residential' },
    { icon: '🚗', title: 'Private Driveway — Chesterfield County VA', description: 'Full removal of old concrete driveway and new asphalt installation with proper drainage grading. Completed in one day.', size: '~1,800 sq ft', type: '🏠 Residential', category: 'residential' },
    { icon: '🖤', title: 'Office Complex Sealcoating — Richmond VA', description: 'Full sealcoat and re-stripe of a 3-building office complex. Applied in two shifts over a weekend — zero weekday business disruption.', size: '~35,000 sq ft', type: '🏢 Commercial Sealcoat', category: 'sealcoating' },
    { icon: '✨', title: 'Residential Sealcoating — Henrico County VA', description: 'Crack fill, edge repair, and two-coat sealcoat application on a 4-year-old driveway to extend pavement life by 10+ years.', size: '~2,200 sq ft', type: '🏠 Residential Sealcoat', category: 'sealcoating' },
  ];

  get filteredProjects(): Project[] {
    if (this.activeFilter === 'all') return this.projects;
    return this.projects.filter(p => p.category === this.activeFilter);
  }

  contactMethods: ContactMethod[] = [
    { icon: '📞', label: 'Call or Text', href: 'tel:8044461296', value: '804-446-1296', note: 'Mon–Sat  7 AM – 6 PM' },
    { icon: '✉️', label: 'Email Us', href: 'mailto:info@jwordenasphaltpaving.com', value: 'info@jwordenasphaltpaving.com', note: 'We reply within one business day.' },
    { icon: '🏆', label: 'View Our Houzz Profile', href: 'https://www.houzz.com', value: 'See our 4× Best of Houzz award-winning portfolio →' },
  ];

  serviceAreas: string[] = [
    'Richmond, VA & surrounding counties',
    'Chester & Chesterfield County, VA',
    'Henrico & Hanover County, VA',
    'Colonial Heights & Petersburg, VA',
    'Commercial projects — wider radius available',
  ];

  toggleNav(): void {
    this.navOpen = !this.navOpen;
  }

  closeNav(): void {
    this.navOpen = false;
  }

  setFilter(filter: string): void {
    this.activeFilter = filter;
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const required = form.querySelectorAll<HTMLInputElement | HTMLSelectElement>('[required]');
    let valid = true;
    required.forEach(field => {
      if (!field.value.trim()) {
        field.style.borderColor = '#ef4444';
        valid = false;
      } else {
        field.style.borderColor = '';
      }
    });
    if (!valid) return;

    const formData = new FormData(form);
    const params = new URLSearchParams();
    formData.forEach((value, key) => { params.append(key, value.toString()); });
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString()
    })
      .then(() => {
        this.formSubmitted = true;
        form.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(
          'input:not([type="hidden"]), select, textarea'
        ).forEach(f => { f.value = ''; });
      })
      .catch(() => {
        alert('Sorry, there was a problem submitting your request. Please call us at 804-446-1296 or email info@jwordenasphaltpaving.com.');
      });
  }
}

