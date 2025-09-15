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
  };

  openProductDetails(productKey: string) {
    const product = this.productDetails[productKey as keyof typeof this.productDetails];
    this.dialog.open(ProductDetailsModal, {
      data: product,
      panelClass: 'product-modal',
    });
  }
}
