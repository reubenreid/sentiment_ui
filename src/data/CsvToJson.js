import file from './uk_online_data_full.csv'

Papa.parse(file, {
    complete: function(results) {
        console.log("Finished:", results.data);
    }
});