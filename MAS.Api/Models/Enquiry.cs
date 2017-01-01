using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Text;

namespace MAS.Api.Models
{
    public class Enquiry
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Company { get; set; }
        public string Mobile { get; set; }
        public string Message { get; set; }
        
        public bool ContactEmail()
        {
            bool Result = false;
            StringBuilder body = ContactTemplate();
            try
            {
                Result = Utilities.SendEmail("Contact :: "+Name+"-"+Mobile, body.ToString());
            }
            catch (Exception ex)
            {                                             
            }
            return Result;
        }

        public StringBuilder ContactTemplate()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("<table colpadding='0' colspaing='0' style='border-collapse:collapse;width:100%;border:2px #007ec6 solid;'>"
                           + "<tr>"
                           + "<td style='background-color:#fff;height:50px;'>"
                           + "<img src='http://winchbiotech.com/Content/images/logo.png' />"
                           + "</td>"
                           + "</tr>"
                           + "<tr>"
                           + "<td style='height:50px;padding:20px 25px 10px 25px;background-color:#f9f9f9;'>"
                           + "<b>Hi</b>,<br/> Someone visited your website and filled Contact Form with the following details, Please find it :"
                           + "</td>"
                           + "</tr>"
                           + "<tr>"
                           + "<td style='height:0px !important;background-color:#f9f9f9;'>&nbsp;</td>"
                           + "</tr>"
                           + "<tr>"
                           + "<td style='padding:10px 25px 20px 25px;background-color:#f9f9f9;'>"
                           + "<table border='1' cellpadding='10' cellspacing='0' style='width:100%;border-collapse:collapse;border:1px #ccc solid;'>"
                           + "<tr>"
                           + "<td style='width:15%;border:none !important;border-bottom:1px #ccc solid;'><b>Person Name</b></td>"
                           + "<td style='width:5px;border:none !important;border-bottom:1px #ccc solid;'>:</td>"
                           + "<td style='border:none !important;border-bottom:1px #ccc solid;'>" + Name.ToString() + "</td>"
                           + "</tr>"
                           + "<tr>"
                           + "<td style='width:15%;border:none !important;border-bottom:1px #ccc solid;'><b>Mobile No.</b></td>"
                           + "<td style='width:5px;border:none !important;border-bottom:1px #ccc solid;'>:</td>"
                           + "<td style='border:none !important;border-bottom:1px #ccc solid;'>" + Mobile.ToString() + "</td>"
                           + "</tr>"
                           + "<tr>"
                           + "<td style='width:15%;border:none !important;border-bottom:1px #ccc solid;'><b>Email Address</b></td>"
                           + "<td style='width:5px;border:none !important;border-bottom:1px #ccc solid;'>:</td>"
                           + "<td style='border:none !important;border-bottom:1px #ccc solid;'>" + Email.ToString() + "</td>"
                           + "</tr>"
                           + "<tr>"
                           + "<td style='width:15%;border:none !important;border-bottom:1px #ccc solid;'><b>Message</b></td>"
                           + "<td style='width:5px;border:none !important;border-bottom:1px #ccc solid;'>:</td>"
                           + "<td style='border:none !important;border-bottom:1px #ccc solid;'>" + Message.ToString() + "</td>"
                           + "</tr>"
                           + "</table>"
                           + "</td>"
                           + "</tr>"
                           + "<tr>"
                           + "<td style='padding:10px 25px 20px 25px;font-size:11px;background-color:#f9f9f9;'>"
                           + "<b>Disclaimer : </b>This mail is auto generated. We have received your Contact details and we will contact you as soon as possible. If you want you can contact us on this Mobile No. : +91-8795812793 Or you can also send your feedback to at this email id info@winchbiotech.com. Please keep visiting <a href='http://www.winchbiotech.com' target='_blank'>www.winchbiotech.com</a>, Thank you once again for contacting us."
                           + "</td>"
                           + "</tr>"
                           + "<tr>"
                           + "<td style='background-color:#007ec6;height:50px;'>"
                           + "</td>"
                           + "</tr>"
                           + "</table>");
            return sb;
        }
    }
}