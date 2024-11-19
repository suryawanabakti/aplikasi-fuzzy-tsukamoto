<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {

        Schema::create('data_panens', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users')->cascadeOnDelete();
            $table->unsignedBigInteger('desa_id');
            $table->foreign('desa_id')->references('id')->on('desa')->cascadeOnDelete();
            $table->string('bulan');
            $table->string('tahun');
            $table->double('luas_lahan');
            $table->double('bibit');
            $table->double('pupuk');
            $table->double('hasil_panen');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('data_panens');
    }
};
