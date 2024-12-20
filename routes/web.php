<?php

use App\Http\Controllers\ActivityController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\DataPanenController;
use App\Http\Controllers\HistoryController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\PerhitunganController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RuleController;
use App\Models\DataPanen;
use App\Models\Perhitungan;
use App\Models\User;
use App\Notifications\FeedbackNotification;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Surya\Sso\Authenticated;

Route::get('/', function () {
    return redirect(route("login"));
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/send-notification', function () {
    $user = User::where('email', 'super@super')->first();
    $user->notify(new FeedbackNotification(auth()->user()));
    try {
        \App\Events\FeedbackNotification::dispatch($user->id);
    } catch (Exception $e) {
    }
    return redirect('/dashboard')->with('success', 'Gagal memberikan notifikasi');
});

Route::get('/dashboard', function () {
    $countPetani = User::role('petani')->count();
    $countPanen = DataPanen::count();
    $countPerhitungan = Perhitungan::count();
    return Inertia::render('Dashboard', ["countPetani" => $countPetani, "countPanen" => $countPanen, "countPerhitungan" => $countPerhitungan]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/rules', [RuleController::class, 'index'])->name('rules.index');

    Route::get('/perhitungan', [PerhitunganController::class, 'index'])->name('perhitungan.index');
    Route::post('/perhitungan', [PerhitunganController::class, 'store'])->name('perhitungan.store');

    Route::get('/history', [HistoryController::class, 'index'])->name('riwayat.index');
    Route::get('/history/{perhitungan}', [HistoryController::class, 'show'])->name('riwayat.show');
    Route::delete('/history/{perhitungan}', [HistoryController::class, 'destroy'])->name('riwayat.destroy');

    Route::resource('users', UserController::class)->names("admin.users");
    Route::resource('data-panen', DataPanenController::class)->names("admin.data-panen");

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/notifications', [NotificationController::class, 'index'])->name('notifications.index');
    Route::get('/notifications/get-data', [NotificationController::class, 'getData'])->name('notifications.get-data');
    Route::get('/notifications/{notification}', [NotificationController::class, 'show'])->name('notifications.show');
    Route::post('/notifications/reads', [NotificationController::class, 'reads'])->name('notifications.reads');

    Route::get('/activities', [ActivityController::class, 'index'])->name('activities.index');
});

require __DIR__ . '/auth.php';
