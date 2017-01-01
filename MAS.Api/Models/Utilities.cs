using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Net.Mail;
using System.Configuration;

namespace MAS.Api.Models
{
    public static class Utilities
    {
        public static bool SendEmail(string Subject, string Body)
        {
            try
            {
                string RecipientEmail = System.Configuration.ConfigurationManager.AppSettings["ToEmail"].ToString();
                string BCcRecipient = System.Configuration.ConfigurationManager.AppSettings["BCcEmail"].ToString();
                string CcRecipient = "skswebs@gmail.com";
                
                SmtpClient smtp = new SmtpClient();
                smtp.Host = System.Configuration.ConfigurationManager.AppSettings["SmtpServer"].ToString();
                string SmtpUser = System.Configuration.ConfigurationManager.AppSettings["SmtpUser"].ToString();
                string SmtpPassword = System.Configuration.ConfigurationManager.AppSettings["SmtpPassword"].ToString();
                smtp.Credentials = new System.Net.NetworkCredential(SmtpUser, SmtpPassword);

                string SenderEmail = System.Configuration.ConfigurationManager.AppSettings["SenderEmail"].ToString();
                string SenderName = System.Configuration.ConfigurationManager.AppSettings["SenderName"].ToString();
                MailAddress FromAddr = new MailAddress(SenderEmail, SenderName, System.Text.Encoding.UTF8);
                MailAddress ToAddr = new MailAddress(RecipientEmail, "", System.Text.Encoding.UTF8);

                MailMessage mail = new MailMessage(FromAddr, ToAddr);
                mail.IsBodyHtml = true;
                mail.Subject = Subject.ToString();
                mail.Body = Body.ToString();

                if (!string.IsNullOrEmpty(CcRecipient))
                {
                    mail.CC.Add(new MailAddress(CcRecipient));
                }
                if (!string.IsNullOrEmpty(BCcRecipient))
                {
                    mail.Bcc.Add(new MailAddress(BCcRecipient));
                }
                smtp.Send(mail);
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
    }
}