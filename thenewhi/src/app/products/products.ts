import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailsModal } from '../product-details-modal/product-details-modal';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  constructor(public dialog: MatDialog) {}

  productDetails = {
    hr: {
      name: 'Hi Trace HR',
      description: 'Time Office and Payroll - Employee attendance and Payroll Management.',
      details: [
        'Employee Self-Service Portal: Allows employees to apply leave, OD, and WFH.',
        'Leave Management: Various types of leaves per company policy.',
        'Payroll: Easily customizable payroll module.',
        'Mobile App & Geo Tracking: User friendly, effective for sales and services people.',
        'BI Dashboard & Reporting: Standard and Statutory reports and Dashboard.',
        'Attendance Management: Time office, Employee Onboarding',
        'Shift Management: Multiple shifts per branch',
        'Employee Exit: Tracking Exit and Full and Final settlement',
      ],
    },
    recruit: {
      name: 'Hi Trace Recruit',
      description:
        'Complete self-manageable recruitment portal to enable job posting, job application and collection of resumes.',
      details: [
        'Customizable Recruitment Portal: Easy to use, customizable and can be white-labeled.',
        'Job Posting: Employers can post unlimited jobs.',
        'Job Application: Make job postings public for people to apply.',
        'Resume DB: Store unlimited resumes for future references.',
        'Manage Reports: Easy sort and filter matching skill.',
      ],
    },
    pam: {
      name: 'Hi Trace PAM',
      description:
        'Setup customized KRA and assess the performance of employees on customized frequency.',
      details: [
        'Customize Key Result Area (KRA): Update the customized KRA metrics via bulk upload. Can customize by department and designation.',
        'Customize Scoring Method: Customized scoring methodology like rating or ranking can be applied.',
        'User Level Access and Reporting: Customizable user level access to view performance only for applicable team members.',
        'Integration with Payroll: Easy to integrate with Payroll and generate salary increases based on performance, and, performance bonuses.',
      ],
    },
    lnd: {
      name: 'Hi Trace L&D',
      description:
        'Learning & Development module to track, upskill, and manage employee competencies.',
      details: [
        'Training Needs Identification: Identification of training needs and planning for refresher / remedial / upskill training.',
        'Internal Course LMS: Provide courses for upskilling and internal certification.',
        'Competency Mapping: Customizable Competency mapping, for each employee.',
        'Reporting & Dashboard: Provide required rating and BI dashboards to enable management decision.',
        'Scoring & Performance Mapping: Track and manage training programs Sync with Hi Trace PAM for appraisal process.',
      ],
    },
    vms: {
      name: 'Hi Trace VMS',
      description:
        'Visitor Management System ensures tracking of visitors in Commercial and Residential complexes.',
      details: [
        'Commercial VMS: Easy to use in office campuses. Supports pre-registered and adhoc visitors.',
        'Residential VMS: Easy and effective visitor tracking for residential communities.',
        'Easy integration with existing applications and lots.',
      ],
    },
    cms: {
      name: 'Hi Trace CMS',
      description:
        "Tracking employee's canteen purchases and flee from hidden costs by the canteen vendors.",
      details: [
        'Easy to integrate with biometric or face recognition devices.',
        "Employee's canteen usage tracked and shared with both Management and vendor.",
        'Vendors can track their Inventory Management by using POS System.',
        'Employees can take tokens generated with their selected Menus to eat food.',
        'Tracks and maintains heaps of data for the bills in the Reports.',
        'The Stocks & Profits of the Inventory can be maintained.',
        'Helps to build transparency between the company, vendor, and employees.',
      ],
    },
    ticket: {
      name: 'Hi Trace Ticket',
      description: 'Raising tickets, tracking and managing issues made easy.',
      details: [
        'Ticket Management system used to track issues or cases raised by the employees or Residential tenants.',
        'Status of each case raised by employees will be notified and status summary will be shared with management.',
      ],
    },
    tds: {
      name: 'Hi Trace TDS',
      description: 'Plan, Track and Reconcile TDS for employees linked with Payroll.',
      details: [
        'Employees can submit both initial proof and final proof for TDS.',
        'Monthly TDS will be calculated based on initial proof submitted.',
        'TDS will reflect in Hi Trace HR payroll',
        'Final reconciliation will be performed and final TDS for the AY will be reflected in the Payroll.',
      ],
    },
    project: {
      name: 'Hi Trace Project',
      description: 'Project Management tool to support IT/ITES employees.',
      details: [
        'Easy to use for IT/ITES companies to track projects.',
        'Easy integration with existing systems.',
      ],
    },
    crm: {
      name: 'Hi Trace CRM',
      description: 'CRM to track leads, pipeline management and simplify lead generation.',
      details: [
        'Helps to track the Leads and identify the prospects.',
        'Easy out the Interview Scheduling process.',
        'Helps to convert the collected leads to Sales.',
        'Customer data can be kept up to date.',
        'Issues with customers can be resolved more quickly.',
      ],
    },
    iot: {
      name: 'Hi Trace IoT',
      description:
        'IoT development and integration, development of integrated dashboards to monitor all loTs in a plant or office.',
      details: [
        'IoT solutions, both devices and software, that are required to enable business automation.',
        'Integration of existing IoT devices.',
        'Development of BI dashboard to monitor and increase preventive maintenance.',
        'Provides Real-Time Data through BI Dashboards by integrating multiple devices.',
        'IoT devices (Smart Objects) help to automate and optimize processes, by improving business efficiency and productivity.',
        'Generate vast amounts of data that can be used to make better-informed business decisions and new business models.',
        'Reduce costs and improve profitability by reducing manual processes and automating repetitive tasks.',
        'Gives enhanced customer experience by creating more personalized and engaging experiences for our customers.',
      ],
    },
    devices: {
      name: 'Hi Trace Devices',
      description:
        'All devices to enable data capture and data collection is available from Hi Trace.',
      details: [
        'Building Automation Devices, Security Devices, Access Control & Security Devices, Retail EAS Devices, Attendance Data Devices.',
        'Face Recognition, RF ID Reader, Biometric Reader, IRIS Scanner.',
      ],
    },
    asset: {
      name: 'Hi Trace Asset',
      description: 'To Track, Deploy, Audit and Manage owned and rented assets.',
      details: [
        'End-to-end tracking of any assets within the plant or corporate office using barcode or QR Code with mobile app.',
        'Audit / Deploy: Easy to deploy; Audit scheduling and audit tracking with Geo Tracking.',
        'Maintenance Tracking: Vendor listing and maintenance tracking with prompt notifications.',
        'Asset Tagging: Customize and generate Barcode tags and scan to onboard.',
        'Asset Exit: Scrap / Donate / Exit Easy to track the asset post completion of economic life of an asset.',
      ],
    },
    csFrTrace: {
      name: 'TIME ATTENDANCE - FACE RECOGNITION CS-FR-TRACE (M) 1000 SERES',
      description: 'Visible light facial recognition with anti-spoofing and a 2.8" touch screen.',
      details: [
        'Visible Light Facial Recognition / Anti-spoofing algorithm against most color and B/W photos, and video attacks.',
        '2.8″ Touch Screen.',
        'Supplement lighting with adjustable brightness.',
        'Exquisite and compact, easy to install. Support desktop and wall install.',
        'Specifications:',
        'Display: 2.8″ Touch Screen',
        'Face Capacity: 800',
        'User Capacity: 800',
        'Transaction: 150000',
        'Operation System: Linux',
        'Standard Functions: 9 Digit User ID / Work Code',
        'Hardware: 900 MHZ Dual Core CPU / Memory 512 MB RAM / 512 MB ROM',
        'Communication: Wifi',
        'Face Recognition Speed: < 1s',
        'Power Supply: 5V / 2A',
        'Working Humidity: 10% -90%',
        'Working Temperature: 0°C – 45°C',
        'Dimensions (W*H*D): 100 * 100.2 * 23.7 mm',
      ],
    },
    csFrt103Vl: {
      name: 'FACE RECOGNITION - CS - FRT 103 VL',
      description:
        'Touchless multi-biometric identification terminal with Visible Light Facial Recognition.',
      details: [
        'Touchless multi-biometric identification terminal.',
        'Visible Light Facial Recognition technology.',
        'Recognizes a target from 30cm to 50cm.',
        'Specifications:',
        'Display: 2.8-inch TFT Screen',
        'User Capacity: 500',
        'Face Capacity: 500',
        'Fingerprint Capacity: 2000',
        'Card Capacity: 500 (Optional)',
        'Transactions: 50,000',
        'Standard Functions: ADMS, DST, Self-service Query, Automatic Status Switch, T9 Input, Camera, 9-digit User ID, Multiple Verification Methods, Bell Scheduling, SSR',
        'Hardware: 1GHz Dual-Core CPU, 256MB RAM/256MB Flash, 1MP Binocular Camera',
        'Communication: TCP/IP, USB Host, WiFi (Optional)',
        'Operation System: Linux',
        'Biometrics Algorithm: ZKLiveFace V3.5 / ZKFinger V10.0',
        'Facial Recognition Speed: 1s',
        'Power Supply: 5V 2A',
        'Working Humidity: 20% to 80%',
        'Working Temperature: 0°C to 45°C',
        'Dimensions (W*H*D): 168.0*151.5*31.7 (mm)',
      ],
    },
    csFpt301W: {
      name: 'BIOMETRIC DOOR ACCESS - CS-FPT-301W',
      description:
        'Ultra-thin fingerprint time attendance and access control terminal with BioID sensor and Wifi.',
      details: [
        '2.4-inch TFT color screen and Touch keys.',
        'Ultra thin and elegant design.',
        'Full Access Control Features: Anti-passback, access control interface for 3rd party electric lock, door sensor, exit button, alarm.',
        'Standard Wi-Fi.',
        'Network interface by TCP/IP or RS485.',
        'Built-in auxiliary input with enhanced flexibility to link with wired detector or emergency switch.',
        'Multiple Verification Modes: Multi-verification methods (card is optional) providing user various choices.',
        'Specifications:',
        'Display: 2.4-inch TFT LCD Color Screen',
        'Fingerprint Capacity: 3000',
        'Card Capacity: 5000 (Optional) ID or mifare card',
        'Transaction Capacity: 30,000',
        'Sensor: BioID Sensor/ SilkID Sensor (optional)',
        'Algorithm Version: ZKFinger VX10.0',
        'Communication: RS232/485, TCP/IP, USB-host, Wi-Fi',
        'Access Control Interface: 3rd Party Electric Lock, Door Sensor, Exit Button, Alarm',
        'Wiegand Signal: Input, Output',
        'Functions: DST, Automatic Status Switch, Record query, T9 input, 14 digit user ID, Anti-passback, Scheduled-Bell, Printer(Optional), ADMS(Optional)',
        'Power Supply: 12V DC, 3A',
        'Operating Temperature: 0 °C- 45 °C',
        'Operating Humidity: 20%-80%',
        'Dimension(LxWxH): 158.5 X 78.0 X 19.4mm',
      ],
    },
    csFpt101: {
      name: 'TIME ATTENDANCE - FINGERPRINT CS-FPT-101',
      description: 'A fingerprint time attendance device with a 2.8" TFT screen.',
      details: [
        'Screen: 2.8’ TFT',
        'Fingerprint capacity: 1000',
        'Card capacity: 500',
        'Transaction capacity: 80000',
        'Fingerprint Algorithm: ZKFinger 10.0',
        'Adapter: 12V 1.5A',
        'Languages: English (Multi-Language Optional)',
        'Access Control: Exit button, Control lock',
        'Wiegand: In and Output',
        'ID Card: Standard',
        'MF Card: Optional',
        'Pin: 9 digit user ID',
        'Backup Battery: Y(7.4V)',
        'SSR: N (if you don’t need SSR the FP capacity can be 1000), Y (if you choose SSR, the FP capacity will be 500)',
        'Scheduled Bell: External-Optional (control lock and external bell you can choose one of them at once), Internal-Y',
      ],
    },
    csFrt302: {
      name: 'TIME ATTENDANCE - CS-FRT302',
      description: 'A time attendance device with a large capacity for faces and fingerprints.',
      details: [
        '3,000 face and 4,000 fingerprint templates.',
        'Multi-languages.',
        'High verification speed.',
        'Advanced and user-friendly UI.',
        'Chip encryption for firmware protection.',
        'Optional built-in battery backup providing approximately 4 hours of continuous operation.',
        'Easy to extend functions and customize client’s requirements.',
        'One face template is registered for one user only.',
        'Able to detect whether the face is an actual face or a photo, enhancing the security level of verification.',
        'Specifications:',
        'Display: 4.3-Inch Touch Screen',
        'Face Capacity: 3000 (1:N)',
        'Fingerprint Capacity: 4000',
        'ID Card Capacity: 10,000 (optional)',
        'Log Capacity: 100,000',
        'Communication: TCP/IP, RS232/485, USB Host',
        'Standard Functions: Automatic Status Switch, Self-Service Query, Work Code, SMS, DST, T9 Input, 9 Digit User ID, Scheduled Bell, Photo ID',
        'Interfaces: 3rd Party Electric Lock, Door Sensor, Exit Button, Alarm Output',
        'Wiegand Signal: ID/MiFare Card, Optional Functions Wi-Fi, 3G, ADMS, 200 mAH Backup Battery',
        'Power Supply: 12V 3A',
        'Operating Temperature: 0 °C- 45 °C',
      ],
    },
    csFrtSft5Series: {
      name: 'FACE RECOGNITION - CS-FRT SFT 5SERIES',
      description:
        'Visible light facial recognition with anti-spoofing and multiple verification methods.',
      details: [
        'Visible Light Facial Recognition.',
        'Anti-spoofing algorithm against print attack, videos attack and 3D mask attack.',
        'Multiple verification methods: Face / Fingerprint / Card / Password.',
        'Available card modules: 125KHz ID card (EM) or RFID S50/S70 IC Card (13.56 MHz).',
        'Supplement light with adjustable brightness.',
        '3,000 face templates capacity.',
        'Specifications:',
        'Display: 5” touch screen',
        'Face Capacity: 3,000',
        'Fingerprint Capacity: 3,000',
        'Card Capacity: 10,000',
        'Transactions: 2,00,000',
        'Operation System: Linux',
        'Standard Functions: IDCard, ADMS, T9 Input,DST, Camera, 9-digit User ID, Acess Levels, Groups, Holidays, Anti-passback, Record Query, Tamper Switch Alarm, Multiple Verify Modes',
        'Hardware: 900MHz Dual Core CPU; 512MB RAM / 8G Flash; 2MP WDR Low Light Camera; Adjustable LED Supplement Lighting',
        'Communication: TCP/IP, WiFi (Optional), Wiegand input/output, RS485, RS232(Thermal Printer)',
        'Access Control Interface: 3rd Party Electric Lock, Door Sensor,Exit Button, Alarm output, Auxiliary Input',
        'Optional Function: 13.56MHz IC Card (RFID S50/S70 IC Card (13.56Mhz)',
        'Facial Recognition Speed: 1s',
        'Biometrics Algorithms: ZKFace V5.8 & ZKFinger V10.0',
        'Power Supply: 12V 3A',
        'Working Humidity: 20% – 80%',
        'Working Temperature: 0°C ~ 45°C (32°F ~ 113°F)',
        'Dimensions(W*H*D): 91.93 * 202.93 * 21.5 (mm)',
      ],
    },
  };

  openProductDetails(productKey: string) {
    const product = this.productDetails[productKey as keyof typeof this.productDetails];
    this.dialog.open(ProductDetailsModal, {
      data: product,
      width: '90vw',
      maxWidth: '900px',
      panelClass: 'product-modal',
    });
  }
}
