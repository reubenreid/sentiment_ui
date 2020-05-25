import file from './uk_online_data_full.csv';

<script src="./papaparse.min.js"></script>
Papa.parse(file, {
    complete: function(results) {
        console.log("Finished:", results.data);
    }
});