document.getElementById("input-border").addEventListener('change', function(e) {
    document.getElementById("style-border").disabled = e.target.checked ? null : 'disabled';
});

document.getElementById("input-layout").addEventListener('change', function(e) {
    document.getElementById("style-layout").disabled = e.target.checked ? null : 'disabled';
});