exports.register = (request, response) => {
    const submittedReport = request.body;

    const report = jobReport.getJobReportInstance();

    report.insertJobReport(submittedReport).then((data) => {
        response.json({
            itemId: data
        });
    })

}
